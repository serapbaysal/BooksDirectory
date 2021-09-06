import { Body, Controller, Post } from '@nestjs/common';
import { BookCreateDto, BookModel } from './books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookService:BooksService){}

    @Post()
    async createBook(@Body() body:BookCreateDto):Promise<BookModel>{
        return await this.bookService.createBook(body);
        
    }
}
