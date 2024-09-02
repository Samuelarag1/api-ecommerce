import { Module } from '@nestjs/common';
import { UserController } from './Interfaces/user.controller';
import { CreateUserService } from './Application/CreateUser';

@Module({
  controllers: [UserController],
  providers: [CreateUserService],
})
export class UserModule {}
