import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  static products = [
    {
      id: '1',
      name: 'TV',
      description: 'Best tv',
      image: 'game.png',
      price: '1000',
    },
    {
      id: '2',
      name: 'iPhone',
      description: 'Best iPhone',
      image: 'safe.png',
      price: '999',
    },
    {
      id: '3',
      name: 'Chromecast',
      description: 'Best Chromecast',
      image: 'submarine.png',
      price: '30',
    },
    {
      id: '4',
      name: 'Glasses',
      description: 'Best Glasses',
      image: 'game.png',
      price: '100',
    },
  ];
  @Get('/')
  @Render('products/index')
  index() {
    const viewData = {
      products: ProductsController.products,
      subtitle: 'List of products',
      title: 'Products - Online Store',
    };

    return { viewData: viewData };
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param() params) {
    const product = ProductsController.products[params.id - 1];
    const viewData = {
      product: product,
      subtitle: product.name + ' - Product Information',
      title: product.name + ' - Online Store',
    };
    return { viewData };
  }
}
