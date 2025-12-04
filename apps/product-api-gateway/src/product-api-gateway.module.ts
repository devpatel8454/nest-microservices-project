import { Module } from '@nestjs/common';
import { ProductApiGatewayController } from './product-api-gateway.controller';
import { ProductApiGatewayService } from './product-api-gateway.service';
import { UsersController } from './users/users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [ProductApiGatewayController, UsersController, ProductsController],
  providers: [ProductApiGatewayService],
})
export class ProductApiGatewayModule { }
