import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientResolver } from './client/gql/client.resolver';
import { grpcClientOptions } from './grpc-client.options';
import { InvoiceResolver } from './invoice/gql/invoice.resolver';
import { LineDetailResolver } from './invoice/gql/lineDetail.resolver';
import { ProductResolver } from './product/gql/product.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, ClientResolver, ProductResolver, InvoiceResolver,LineDetailResolver],
})
export class AppModule {}
