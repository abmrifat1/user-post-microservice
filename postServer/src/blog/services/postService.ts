import { from, Observable, of } from "rxjs";
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { title } from "process";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';
import { createPostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/postDto";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PostService {
    private client: ClientProxy;
    

    constructor(
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>,
      ) {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
              host: '127.0.0.1',
              port: 8080,
            },
          });
      }
    
    public getAllPost(): Observable<PostEntity[]> {
        return from(this.postRepository.find());
    } 

    public getPostById(id: number): Observable<PostEntity> {
        return from(this.postRepository.findOne(id));
    }

    public createPost(createPostDto: createPostDto): Promise<PostDto> {
        return this.postRepository.save(createPostDto);
        
    }

    public updatePost(id: number, post: createPostDto) {
        return this.postRepository.update(+id, post);
        
    }

    public deletePost(id: number) {
      return this.postRepository.delete(id); 
    }

    public getAllPostByUserId(userId: number): Observable<PostEntity[]> {
        return from(this.postRepository.find({userId: userId}));
    }

    public getSingleUser(userId: number): any {
        const user = this.client.send<any, any>('getSingleUser', userId);
        return user;
    }
}