import IMUser from './User';

export interface IUserRepository {
  createUser(user: IMUser): Promise<void>;
}
