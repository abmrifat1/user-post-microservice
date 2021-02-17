import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { from } from 'rxjs';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private logger = new Logger('AppController');
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): any {
    return this.getSingleUser(id);
  }

  @MessagePattern('getSingleUser')
  async getSingleUser(data: number) {
    const user = this.userService.getSingleUser(data); // use math service to calc result & return
    console.log('user controller:', user);
    return user;
  }
}