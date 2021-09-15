import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.dto';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';



@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}


