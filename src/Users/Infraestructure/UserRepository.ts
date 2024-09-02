import { IUserRepository } from './../Domain/IUserRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './User';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: UserEntity) {
    try {
      await user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
