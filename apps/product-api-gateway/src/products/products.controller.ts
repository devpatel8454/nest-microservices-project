import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { productsDto } from 'apps/products/src/products.dto';


@Controller('products')
export class ProductsController {
    constructor(@Inject('PRODUCTS_SERVICE') private readonly productsService: ClientProxy) { }

    @Get()
    getproducts() {
        return this.productsService.send({ cmd: 'get_products' }, {});
    }

    @Post()
    addproducts(@Body() productsDto: productsDto) {
        return this.productsService.send({ cmd: 'add_products' }, productsDto);
    }
}
