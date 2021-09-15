import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto, UserModel } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    async register(@Body() body:SignUpDto):Promise<UserModel>{
        return await this.authService.signup(body);
    }
}
