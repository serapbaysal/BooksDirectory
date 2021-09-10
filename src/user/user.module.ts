import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserModel, UserSchema } from './user.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
