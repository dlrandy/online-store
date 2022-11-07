import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Product } from "../models/product.entity";
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>
  ) { }
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }
  findByIds(ids: string[]): Promise<Product[]> {
    return this.productsRepository.findBy({ id: In(ids) });
  }
  createOrUpdate(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }
  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
