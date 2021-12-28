import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientService } from './client/client.ctrl';

@Module({
  imports: [],
  controllers: [AppController, ClientService],
  providers: [AppService],
})
export class AppModule {}
