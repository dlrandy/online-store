import { Global, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsController } from "./products/products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "../ormconfig";
import { ProductsService } from "./products/products.service";
import { Product } from "./models/product.entity";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { User } from "./models/user.entity";
import { UsersService } from "./users/users.service";
import { CartModule } from "./cart/cart.module";
import { Order } from "./models/order.entity";
import { Item } from "./models/item.entity";
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Product, User, Order, Item]),
    AdminModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, UsersService],
  exports: [ProductsService, UsersService],
})
export class AppModule { }
