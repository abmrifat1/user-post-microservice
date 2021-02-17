import { Module } from '@nestjs/common';
import { PostController } from './controllers/postController';
import { UserController } from './controllers/userController';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/postEntity';
import { UserEntity } from './entities/userEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, UserEntity])
  ],
  controllers: [
    PostController,
    UserController
  ],
  providers: [
    PostService,
    UserService
  ],
})
export class BlogModule {}
