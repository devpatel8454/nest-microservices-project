import { Injectable } from '@nestjs/common';
import { productsDto } from './products.dto';

@Injectable()
export class ProductsService {
  private products: productsDto[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200
    }
  ];

  findAll(): productsDto[] {
    return this.products;
  }

  add_products(productsDto: productsDto) {
    this.products.push({
      id: this.products.length + 1,
      name: productsDto.name,
      price: productsDto.price
    })
    return this.products;
  }
}
