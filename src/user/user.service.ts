import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserModel, UserUpdateDto } from './user.dto';
import { Model } from 'mongoose';


@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userMongo: Model<UserModel>
    ) { }

    async createUser(user:UserCreateDto):Promise<UserModel>{
        return await this.userMongo.create(user);

    }
    

    async getAllUsers():Promise<UserModel[]>{
        return await this.userMongo.find();    
    }

    async getUserById(id:string):Promise<UserModel>{
        return await this.userMongo.findById(id);
    }

    async updateUser(id:string, user:UserUpdateDto):Promise<UserModel>{
        return await this.userMongo.findByIdAndUpdate(id,user, {new:true})
    }

    async deleteUser(id:string):Promise<UserModel>{
        return await this.userMongo.findByIdAndDelete(id);
    }




}
