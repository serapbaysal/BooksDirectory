import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BookSchema } from './books.dto';
import { BooksService } from './books.service';

@Module({
  imports: [MongooseModule.forFeature([{name:'Book', schema:BookSchema}])],
  providers: [BooksService],
  controllers: [BooksController],
  
})
export class BooksModule {}
