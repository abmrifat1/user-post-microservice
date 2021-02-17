import { from, Observable } from "rxjs";
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/userService';
import { UserEntity } from "../entities/userEntity";
import { createUserDto } from "../dtos/createUserdto";
import { UserDto } from "../dtos/userDto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService){
    }

    @Get()
    getAllPost(): Observable<UserEntity[]> {
        return this.userService.getAllUser();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Observable<UserEntity> {
        return this.userService.getUserById(id);
    }

    @Post('/create')
    createPost(@Body() userDto: createUserDto): Promise<UserDto> {
        console.log("post body:", userDto);
        return this.userService.createUser(userDto);
    }

    @Get(':id/posts')
    getAllPostByUserId(@Param('id') userId: number):Observable<any> {
        return this.userService.getAllPostByUserId(userId);
    }

    @Put(':id')
    updatePost(@Param('id') id: number, @Body() userDto: createUserDto): Promise<any> {
        return this.userService.updateUser(id, userDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }
}