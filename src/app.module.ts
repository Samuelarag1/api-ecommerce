import { UserRepository } from './Users/Infraestructure/UserRepository';
import { UserModule } from './Users/User.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { UserEntity } from './Users/Infraestructure/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DEV_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserModule]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
