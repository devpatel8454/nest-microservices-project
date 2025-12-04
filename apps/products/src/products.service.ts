import { Injectable } from '@nestjs/common';
import { productsDto } from './products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,) { }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  add_products(productsDto: productsDto): Promise<Product> {
    const newProduct = this.productsRepository.create(productsDto);
    return this.productsRepository.save(newProduct);
  }
}
