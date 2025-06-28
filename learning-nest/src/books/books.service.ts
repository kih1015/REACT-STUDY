import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ListBooksDto } from './dto/list-books.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      publishedDate: '1925-04-10',
      rating: 5,
      available: true,
    },
    {
      id: '2',
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      genre: 'Non-fiction',
      publishedDate: '2011-01-01',
      rating: 4,
      available: true,
    },
    {
      id: '3',
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      publishedDate: '1997-06-26',
      rating: 3,
      available: false,
    },
    {
      id: '4',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      publishedDate: '1960-07-11',
      rating: 5,
      available: true,
    },
    {
      id: '5',
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      publishedDate: '1949-06-08',
      rating: 5,
      available: false,
    },
    {
      id: '6',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      publishedDate: '1951-07-16',
      rating: 4,
      available: true,
    },
    {
      id: '7',
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Dystopian',
      publishedDate: '1932-01-01',
      rating: 3,
      available: true,
    },
    {
      id: '8',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      publishedDate: '1937-09-21',
      rating: 5,
      available: false,
    },
    {
      id: '9',
      title: 'Meditations',
      author: 'Marcus Aurelius',
      genre: 'Philosophy',
      publishedDate: '0180-01-01',
      rating: 4,
      available: true,
    },
    {
      id: '10',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      publishedDate: '1813-01-28',
      rating: 5,
      available: true,
    },
  ];

  /** 목록 + 간단 필터 */
  async findAll(query: ListBooksDto): Promise<Book[]> {
    const { genre, search } = query;
    let result = this.books;

    if (genre) {
      result = result.filter(
        (b) => b.genre.toLowerCase() === genre.toLowerCase(),
      );
    }
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(s) ||
          b.author.toLowerCase().includes(s),
      );
    }
    return result;
  }

  async findOne(id: string): Promise<Book> {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async create(dto: CreateBookDto): Promise<Book> {
    const id = String(this.books.length + 1);
    const newBook: Book = { id, ...dto };
    this.books.push(newBook);
    return newBook;
  }

  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const idx = this.books.findIndex((b) => b.id === id);
    if (idx === -1) throw new NotFoundException('Book not found');
    this.books[idx] = { ...this.books[idx], ...dto };
    return this.books[idx];
  }

  async remove(id: string): Promise<void> {
    const idx = this.books.findIndex((b) => b.id === id);
    if (idx === -1) throw new NotFoundException('Book not found');
    this.books.splice(idx, 1);
  }
}
