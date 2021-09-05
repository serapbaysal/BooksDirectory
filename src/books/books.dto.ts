import * as mongoose from 'mongoose'

export class BookCreateDto {
    name: string;
    author: string;
    pages: number;
    publisher: string;
}


export class BookModel {
    id:string;
    name: string;
    author: string;
    pages: number;
    publisher: string;
    published: Date;
}


export const BookSchema = new mongoose.Schema(
    {
        name: String,
        author: String,
        pages: Number,
        publisher: String,
        published: Date
    }
)

