import { Test, TestingModule } from '@nestjs/testing';
import { ProductApiGatewayController } from './product-api-gateway.controller';
import { ProductApiGatewayService } from './product-api-gateway.service';

describe('ProductApiGatewayController', () => {
  let productApiGatewayController: ProductApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductApiGatewayController],
      providers: [ProductApiGatewayService],
    }).compile();

    productApiGatewayController = app.get<ProductApiGatewayController>(ProductApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
