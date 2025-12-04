import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
