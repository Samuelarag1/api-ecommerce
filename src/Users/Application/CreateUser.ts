import { Injectable } from '@nestjs/common';
import IMUser from '../Domain/User';

@Injectable()
export class CreateUserService {
  private readonly users: IMUser[];

  newUser() {
    return 'Creado';
  }
}
