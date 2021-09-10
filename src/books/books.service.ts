import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookModel, BookCreateDto, BookUpdateDto } from './books.dto';


@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private readonly bookMongo: Model<BookModel>
    ) {

    }

    async createBook(book: BookCreateDto): Promise<BookModel> {   // MongoDb promise döner, dolayısıyla yazılan fonksiyonlar da promise dönmeli
        const createdBook = new this.bookMongo(book);
        return await createdBook.save();
    }

    async getBooks():Promise<BookModel[]>{
        return await this.bookMongo.find();

    }

    async getBookById(id:string):Promise<BookModel>{
        return await this.bookMongo.findById(id);
    }

    async updateBooks(id:string, book:BookUpdateDto):Promise<BookModel> {
        
        return await this.bookMongo.findByIdAndUpdate(id, book , {new: true});

    }

    async deleteBook(id:string):Promise<BookModel>{
        return await this.bookMongo.findByIdAndDelete(id);
    }


}
