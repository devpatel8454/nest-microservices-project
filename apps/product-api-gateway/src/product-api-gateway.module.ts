import { Module } from '@nestjs/common';
import { ProductApiGatewayController } from './product-api-gateway.controller';
import { ProductApiGatewayService } from './product-api-gateway.service';
import { UsersController } from './users/users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products/products.controller';
import { AuthController } from './auth/auth.controller';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '60m' },
    }),
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
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3004,
        },
      },
    ]),
  ],
  controllers: [ProductApiGatewayController, UsersController, ProductsController, AuthController],
  providers: [ProductApiGatewayService],
})
export class ProductApiGatewayModule { }
