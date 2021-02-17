import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { from } from 'rxjs';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('create')
  async createUser(data: any) {
    return this.appService.createUser(data);
  }

  // @MessagePattern('getSingleUser')
  // async getAllPostByUserId(data: number) {
  //   return this.appService.getSingleUser(data); // use math service to calc result & return
  // }
}
