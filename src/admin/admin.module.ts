import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminProductsController } from './products/products.controller';

@Module({
  controllers: [AdminController, AdminProductsController,],
  providers: [AdminService]
})
export class AdminModule { }
