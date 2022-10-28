import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Product } from "src/models/product.entity";
import { ProductsService } from "../../products/products.service";
@Controller("admin/products")
export class AdminProductsController {
  constructor(private readonly productsService: ProductsService) { }
  @Get("/")
  @Render("admin/products/index")
  async index() {
    const viewData = {
      title: "Admin Page - Admin - Online Store",
      products: await this.productsService.findAll(),
    };
    return {
      viewData,
    };
  }

  @Post("/store")
  @UseInterceptors(FileInterceptor("image", { dest: "./public/uploads" }))
  @Redirect("/admin/products")
  async store(@Body() body, @UploadedFile() file: Express.Multer.File) {
    const newProduct = new Product();
    newProduct.setName(body.name);
    newProduct.setDescription(body.description);
    newProduct.setPrice(body.price);
    newProduct.setImage(file.filename);
    await this.productsService.createOrUpdate(newProduct);
  }
  @Post("/:id")
  @Redirect("/admin/products")
  remove(@Param("id") id: number) {
    return this.productsService.remove(id);
  }

  @Get("/:id")
  @Render("admin/products/edit")
  async edit(@Param("id") id: number) {
    const viewData = {
      title: "Admin Page - Edit Product - online Store",
      product: await this.productsService.findOne(id),
    };
    return {
      viewData,
    };
  }

  @Post("/:id/update")
  @UseInterceptors(FileInterceptor("image", { dest: "./public/uploads" }))
  @Redirect("/admin/products")
  async update(
    @Body() body,
    @UploadedFile() file: Express.Multer.File,
    @Param("id") id: number
  ) {
    const product = await this.productsService.findOne(id);
    product.setDescription(body.description);
    product.setName(body.name);
    product.setPrice(body.price);
    if (file) {
      product.setImage(file.filename);
    }
    await this.productsService.createOrUpdate(product);
  }
}
