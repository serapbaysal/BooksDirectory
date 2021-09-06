import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';


@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
