import { NestFactory } from '@nestjs/core';
import { ProductApiGatewayModule } from './product-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductApiGatewayModule);
  await app.listen(process.env.port ?? 3300);
}
bootstrap();
