import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcInvoiceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url:'localhost:6000',
      package: 'invoice',
      protoPath: join(__dirname, './invoice/invoice.proto'),
    },
};