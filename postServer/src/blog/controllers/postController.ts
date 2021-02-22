import { from, Observable } from "rxjs";
import { Body, Controller, Delete, Get, Param, Post, Put, HttpException, HttpStatus,UseInterceptors } from '@nestjs/common';
import { PostService } from '../services/postService';
import { PostEntity } from "../entities/postEntity";
import { createPostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/postDto";
import { ResponseTransformerInterceptor } from '../interceptors/transform-interceptor';
import { ApiCreatedResponse, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
@Controller('posts')
@UseInterceptors(ResponseTransformerInterceptor)
export class PostController {
    constructor(private postService: PostService){
    }

    @Get()
    async getAllPost(): Promise<PostEntity[]> {
       const post = await this.postService.getAllPost().toPromise();
       console.log('all post:', post);
       return post;
    }

    @Get(':id')
    getPostById(@Param('id') id: number): Observable<PostEntity> {
        return this.postService.getPostById(id);
    }

    @Post('/create')
    @ApiCreatedResponse({description: 'post create'})
    @ApiUnauthorizedResponse({description: 'user not found'})
    async createPost(@Body() postDto: createPostDto): Promise<PostDto> {
        const user = await this.postService.getSingleUser(postDto.userId).toPromise();
       if (user) {
        return this.postService.createPost(postDto);
           } else {
        throw new HttpException({
             "statusCode": 404,
             "message": "No user found"
          }, HttpStatus.NOT_FOUND); 
       }
        // return this.postService.createPost(postDto);
    }

    @Put(':id')
    @ApiCreatedResponse({description: 'post update'})
    updatePost(@Param('id') id: number, @Body() postDto: createPostDto) {
        return this.postService.updatePost(id, postDto);
    }

    @Delete(':id')
    @ApiCreatedResponse({description: 'post remove'})
    deletePost(@Param('id') id: number) {
       return this.postService.deletePost(id);
    }

    @Get('single-user/:id')
    async getSingleUser(@Param('id') id: number) : Promise<any> {
       const user = await this.postService.getSingleUser(id).toPromise();
       console.log('single user:', user);
       return user;
    }
}