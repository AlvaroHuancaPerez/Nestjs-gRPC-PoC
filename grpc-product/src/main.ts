import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log(`__dirname   -  d : ${__dirname}`);  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url:'localhost:7000',
      package: 'product',
      protoPath: join(__dirname, 'product/product.proto'),
    },
  });
  return app.listen();
}
bootstrap();
