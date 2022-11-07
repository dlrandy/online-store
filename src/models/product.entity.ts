import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
  }
  @Column()
  name: string;
  public getName(): string {
    return this.name.toUpperCase();
  }
  public setName(value: string) {
    this.name = value;
  }
  @Column()
  description: string;
  public getDescription(): string {
    return this.description;
  }
  public setDescription(value: string) {
    this.description = value;
  }
  @Column()
  image: string;
  public getImage(): string {
    return this.image;
  }
  public setImage(value: string) {
    this.image = value;
  }
  @Column()
  price: number;
  public getPrice(): number {
    return this.price;
  }
  public setPrice(value: number) {
    this.price = value;
  }
  static sumPricesByQuantities(products: Product[], productsInSession): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].getPrice() * productsInSession[products[i].getId()];
    }
    return total;
  }
}
