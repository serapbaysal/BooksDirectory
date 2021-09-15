import * as mongoose from 'mongoose'

export class UserCreateDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordAgain:string;
}


export class UserUpdateDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class UserModel {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
}


export const UserSchema = new mongoose.Schema(
    {
        id: String,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        passwordAgain: String,

    }
)

