import { Injectable } from '@nestjs/common';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';


@Injectable()
export class UserService {
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

  getUsers(): any {
    return this.users;
  }

  public createUser(data: any): any {
    this.logger.log('service ' + data.email); // Log something on every call
    data.name = "new";
    return data;
  }

  public getSingleUser(userId : number): any {
    this.logger.log('service:' + userId); // Log something on every call

    function filter_dates(obj) {
      return obj.id === Number(userId);
  }
    var filtered = this.users.filter(filter_dates);
    console.log('user service:', filtered[0]);

    return filtered[0];
  }
 }
