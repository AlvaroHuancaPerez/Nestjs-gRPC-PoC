import { Metadata } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class ProductService {

  
    @GrpcMethod('ProductService', 'FindOne')
    findOne(data: any) {
    const serverMetadata = new Metadata();
    const items = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'Lapiz' },
    ];


    return items.find(({ id }) => id === data.id);
  }
}