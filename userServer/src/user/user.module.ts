import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
