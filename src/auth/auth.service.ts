import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { SignUpDto, UserModel } from './auth.dto';
import { Model } from 'mongoose';
import { LoginDto } from './auth.dto';



@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>
    ) {

    }

    async signup(data:SignUpDto):Promise<UserModel>
    {
        return await this.userMongo.create(data);
    }




    




}
