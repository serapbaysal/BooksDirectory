import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import 'dotenv/config';
import { BooksService } from './books/books.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.mongoUrl), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
