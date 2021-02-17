import { from, Observable, of } from "rxjs";
import { Injectable } from '@nestjs/common';
import { title } from "process";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/userEntity';
import { PostEntity } from '../entities/postEntity';
import { createUserDto } from "../dtos/createUserdto";
import { UserDto } from "../dtos/userDto";
import { PostService } from './postService';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private postService: PostService,
      ) {}
    
    public getAllUser(): Observable<UserEntity[]> {
        return from(this.userRepository.find());
    } 

    public getUserById(id: number): Observable<UserEntity> {
        return from(this.userRepository.findOne(id));
    }

    public createUser(createUserDto: any): Promise<UserDto> {
        return this.userRepository.save(createUserDto);
    }

    public getAllPostByUserId(userId: number): Observable<any> {
        return this.postService.getAllPostByUserId(userId);
    }

    public updateUser(id: number, user: any) {
       return this.userRepository.update(+id, user);
    }

    public deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}