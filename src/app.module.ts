import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsController } from "./products/products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "../ormconfig";
import { ProductsService } from "./products/products.service";
import { Product } from "./models/product.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule { } 
