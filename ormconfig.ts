import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root123456',
  database: 'online_store',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
