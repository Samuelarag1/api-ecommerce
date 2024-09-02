import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ length: 3 })
  name: string;

  @Column({ length: 3 })
  password: string;
}
