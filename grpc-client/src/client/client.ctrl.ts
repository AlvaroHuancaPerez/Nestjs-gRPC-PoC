import { Metadata } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class ClientService {

  
    @GrpcMethod('ClientService', 'FindOne')
    findOne(data: any
    // , metadata: Metadata, call: ServerUnaryCall<any>
    ) {
    const serverMetadata = new Metadata();
    const items = [
      { id: 1, name: 'net' },
      { id: 2, name: 'fasts' },
    ];

    // serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    // call.sendMetadata(serverMetadata);

    return items.find(({ id }) => id === data.id);
  }
}