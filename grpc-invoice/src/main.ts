import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log(`__dirname   -  d : ${__dirname}`);  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url:'localhost:6000',
      package: 'invoice',
      protoPath: join(__dirname, 'invoice/invoice.proto'),
    },
  });
  return app.listen();
}
bootstrap();
