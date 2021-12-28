import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceService } from './invoice/invoice.ctrl';

@Module({
  imports: [],
  controllers: [AppController, InvoiceService],
  providers: [AppService],
})
export class AppModule {}
