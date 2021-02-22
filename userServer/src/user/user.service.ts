import { Injectable } from '@nestjs/common';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';


@Injectable()
export class UserService {
  public users = [
    {
      id: 1,
      name: "super",
      email: "super@gmail.com",
      address: "dhaka,bd",
      phone: "5566555"
    },
    {
      id: 3,
      name: "user-3",
      email: "user-3@gmail.com",
      address: "cumilla",
      phone: "44443333"
    },
    {
      id: 2,
      name: "user-2 new",
      email: "user-2@gmail.com",
      address: "cumilla",
      phone: "2223333"
    }
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
