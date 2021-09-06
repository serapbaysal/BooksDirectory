import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { DeleteQueryBuilder } from 'typeorm';
import { BookCreateDto, BookModel, BookUpdateDto } from './books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookService:BooksService){}

    @Post()
    async createBook(@Body() body:BookCreateDto):Promise<BookModel>{
        return await this.bookService.createBook(body);
        
    }

    
    @Get()
    async getBooks():Promise<BookModel[]>{
        return await this.bookService.getBooks();
    }


    @Get(":id")
    async getBookById(@Param() params):Promise<BookModel>{
        return await this.bookService.getBookById(params.id);
    }


    @Put(":id")
    async updateBook(@Param() params, @Body() book:BookUpdateDto):Promise<BookModel>{
        return await this.bookService.updateBooks(params.id, book);
    }

    @Delete(":id")
    async deleteBook(@Param() params){
        return await this.bookService.deleteBook(params.id);

    }
}
