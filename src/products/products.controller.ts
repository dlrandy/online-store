import { Controller, Get, Param, Render, Res } from "@nestjs/common";
import { ProductsService } from "../products/products.service";
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }
  @Get("/")
  @Render("products/index")
  async index() {
    const viewData = {
      products: await this.productsService.findAll(),
      subtitle: "List of products",
      title: "Products - Online Store",
    };

    return { viewData };
  }

  @Get("/:id")
  async show(@Param() params, @Res() response) {
    const product = await this.productsService.findOne(params.id);
    if (product == null) {
      return response.redirect("/products");
    }

    const viewData = {
      product: product,
      subtitle: product.getName() + " - Product Information",
      title: product.getName() + " - Online Store",
    };
    return response.render("products/show", { viewData });
  }
}
