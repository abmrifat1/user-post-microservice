import { Injectable } from '@nestjs/common';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';


@Injectable()
export class AppService {
  public users = [
    {
    id: 1,
    name: "first user",
    email: "f@gmail.com"
  },
  {
    id: 2,
    name: "2nd user",
    email: "s@gmail.com"
  },
  {
    id: 3,
    name: "3rd user",
    email: "t@gmail.com"
  },
]
  private logger = new Logger('AppController');

  getHello(): string {
    return 'Hello service!';
  }

  public createUser(data: any): any {
    this.logger.log('service ' + data.email); // Log something on every call
    data.name = "new";
    return data;
  }

  public getSingleUser(userId : number): any {
    this.logger.log('service for user id:' + userId); // Log something on every call

    function filter_dates(obj) {
      return obj.id === Number(userId);
  }
    var filtered = this.users.filter(filter_dates);
    return filtered[0];
  }
 }
