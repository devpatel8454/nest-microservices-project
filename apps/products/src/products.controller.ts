import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern } from '@nestjs/microservices';
import { productsDto } from './products.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @MessagePattern({ cmd: 'get_products' })
  getproducts(): productsDto[] {
    return this.productsService.findAll();
  }

  @MessagePattern({ cmd: 'add_products' })
  addproducts(productsDto: productsDto) {
    return this.productsService.add_products(productsDto);
  }

}
