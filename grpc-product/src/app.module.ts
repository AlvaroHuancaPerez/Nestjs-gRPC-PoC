import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.ctrl';

@Module({
  imports: [],
  controllers: [AppController, ProductService],
  providers: [AppService],
})
export class AppModule {}
