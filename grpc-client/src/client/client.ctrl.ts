import { Metadata } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class ClientService {

  
    @GrpcMethod('ClientService', 'FindOne')
    findOne(data: any) {
    const serverMetadata = new Metadata();
    const items = [
      { id: 1, name: 'net' },
      { id: 2, name: 'fasts' },
    ];

    return items.find(({ id }) => id === data.id);
  }
}