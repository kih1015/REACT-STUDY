import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ListBooksDto } from './dto/list-books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query() query: ListBooksDto) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.booksService.update(id, dto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return this.booksService.update(id, dto); // 부분 업데이트
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
