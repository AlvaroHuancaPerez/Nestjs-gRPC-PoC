import { Logger } from "@nestjs/common";
import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { grpcClientOptions } from "src/grpc-client.options";
import { grpcInvoiceOptions } from "src/grpc-invoice.options";
import { grpcProductOptions } from "src/grpc-product.options";
import { LineDetailGql } from "./model";

@Resolver(()=> LineDetailGql)
export class LineDetailResolver{

    @Client(grpcInvoiceOptions)
    private readonly invoiceGrpc: ClientGrpc;

    @Client(grpcClientOptions)
    private readonly clientGrpc: ClientGrpc;

    @Client(grpcProductOptions)
    private readonly productGrpc: ClientGrpc;

    // constructor(@Inject('HERO_PACKAGE') private readonly clientGrpc: ClientGrpc) {}

    private invoiceService: any;
    private clientService: any;
    private productService: any;
    // private clientService: any;

    onModuleInit(){
        this.invoiceService = this.invoiceGrpc.getService('InvoiceService');
        this.clientService = this.clientGrpc.getService('ClientService');
        this.productService = this.productGrpc.getService('ProductService');
    }

    @ResolveField()
    async product(@Parent() productParent: LineDetailGql){
        Logger.log("SSS")
        const id = productParent.productId;
        Logger.log(id)
        return await this.productService.findOne({id});
    }
}