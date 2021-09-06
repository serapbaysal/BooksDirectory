import * as mongoose from 'mongoose'

export class UserCreateDto {
    name: string;
    surname:string;
    email:string;
    password:string;
}


export class UserUpdateDto {
    name: string;
    surname:string;
    email:string;
    password:string;
}

export class UserModel {
    id:string;
    name: string;
    surname:string;
    email:string;
    password:string;
}


export const UserSchema = new mongoose.Schema(
    {
        name: String,
        surname:String,
        email:String,
        password:String
        
    }
)

