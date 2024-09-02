import { CreateUserService } from './../Application/CreateUser';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import IMUser from '../Domain/User';

@Controller('user')
export class UserController {
  constructor(private createUser: CreateUserService) {}

  @Get(':id')
  getUserById(@Param('id') id: string): string {
    return `Usuario numero: ${id}`;
  }

  @Post()
  async create() {
    return this.createUser.newUser();
  }
}
