import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model, mongo } from 'mongoose';
import { BookModel, BookCreateDto } from './books.dto';


@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly userMongo: Model<BookModel>
    ) {

    }

    async createBook(book: BookCreateDto): Promise<BookModel> {   // MongoDb promise döner, dolayısıyla yazılan fonksiyonlar da promise dönmeli
        const createdBook = new this.userMongo(book);
        return await createdBook.save();
    }


}
