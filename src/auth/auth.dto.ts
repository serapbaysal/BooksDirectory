export class SignUpDto {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    passwordAgain:string;
}

export class LoginDto {
    email:string;
    password:string;
}

export class UserModel {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    passwordAgain:string;
}