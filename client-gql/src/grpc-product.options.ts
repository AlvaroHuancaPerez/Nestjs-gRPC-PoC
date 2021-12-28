import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcProductOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url:'localhost:7000',
      package: 'product',
      protoPath: join(__dirname, './product/product.proto'),
    },
  };