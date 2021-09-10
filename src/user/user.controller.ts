import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserCreateDto, UserModel, UserUpdateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post()
    async createUser(@Body() body: UserCreateDto):Promise<UserModel>{
        return await this.userService.createUser(body);
    }

    @Get()
    async getAllUsers():Promise<UserModel[]>{
        return await this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param() params):Promise<UserModel>{
        return await this.userService.getUserById(params.id);
    }

    @Put(':id')
    async updateUser(@Param() params, @Body() body:UserUpdateDto):Promise<UserModel>{
        return await this.userService.updateUser(params.id, body);
    }
    
    @Delete(':id')
    async deleteUser(@Param() params):Promise<UserModel>{
        return await this.userService.deleteUser(params.id);
    }

    
}
