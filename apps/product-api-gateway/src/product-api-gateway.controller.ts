import { Controller, Get } from '@nestjs/common';
import { ProductApiGatewayService } from './product-api-gateway.service';

@Controller()
export class ProductApiGatewayController {
  constructor(private readonly productApiGatewayService: ProductApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.productApiGatewayService.getHello();
  }
}
