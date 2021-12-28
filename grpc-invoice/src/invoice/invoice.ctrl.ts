/* eslint-disable prettier/prettier */
import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller, Logger } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class InvoiceService {


  @GrpcMethod('ClientService', 'FindOne')
  findOneClient(data: any) {
  const serverMetadata = new Metadata();
  const items = [
    { id: 1, name: 'net' },
    { id: 2, name: 'fasts' },
  ];

  return items.find(({ id }) => id === data.id);
  }

  @GrpcMethod('InvoiceService', 'FindOne')
  findOne(data: any  ) {
    const serverMetadata = new Metadata();
    const items = [
      {
        id: 1,
        clientId: 1,
        lines: [{
          productId: 1,
          quantity: 4
        }]
      },
      {
        id: 2,
        clientId: 2,
        lines: [{
          productId: 2,
          quantity: 4
        }]
      },
      {
        id: 3,
        clientId: 1,
        lines: [{
          productId: 1,
          quantity: 4
        }]
      }
    ];

    
    const invoice = items.find(({ id }) => id === data.id);

    return invoice;
  }
}