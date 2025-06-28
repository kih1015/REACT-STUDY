import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ListBooksDto } from './dto/list-books.dto';
import { FindOptionsWhere } from 'typeorm';
import { Like } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly repo: Repository<Book>,
  ) {}

  async findAll({ genre, search }: ListBooksDto): Promise<Book[]> {
    // 1) where 조건을 단계별로 쌓는다
    const where: FindOptionsWhere<Book>[] = [];

    // (title OR author) + optional genre
    if (search) {
      const pattern = `%${search}%`;
      where.push(
        { ...(genre ? { genre } : {}), title: Like(pattern) },
        { ...(genre ? { genre } : {}), author: Like(pattern) },
      );
    } else if (genre) {
      where.push({ genre });
    }

    return this.repo.find({
      where, // 배열이지만 중첩 X
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number) {
    const book = await this.repo.findOneBy({ id });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async create(dto: CreateBookDto) {
    const book = this.repo.create(dto);
    return this.repo.save(book);
  }

  async update(id: number, dto: UpdateBookDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (!result.affected) throw new NotFoundException('Book not found');
  }
}
