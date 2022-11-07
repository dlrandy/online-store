import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "bdg18d3sjyz7lqlxumbk-mysql.services.clever-cloud.com",
  port: 3306,
  username: "uotxhhhqwesohycj",
  password: "9VaYbfPpdrtCCO7qHVMY",
  database: "bdg18d3sjyz7lqlxumbk",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
};
