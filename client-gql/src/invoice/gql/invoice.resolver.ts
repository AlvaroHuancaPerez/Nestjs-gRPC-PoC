import { Inject, Logger } from "@nestjs/common";
import { Args, Int, ObjectType, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { IProduct } from "src/api-interfaces";
import { IInvoice } from "src/api-interfaces/lib/invoice";
import { ClientGql } from "src/client/gql/model";
import { grpcClientOptions } from "src/grpc-client.options";
import { grpcInvoiceOptions } from "src/grpc-invoice.options";
import { grpcProductOptions } from "src/grpc-product.options";
import { ProductGql } from "src/product/gql/model";
import { InvoiceGql, LineDetailGql } from "./model";

@Resolver(()=> InvoiceGql)
export class InvoiceResolver{

    @Client(grpcInvoiceOptions)
    private readonly invoiceGrpc: ClientGrpc;

    @Client(grpcClientOptions)
    private readonly clientGrpc: ClientGrpc;

    @Client(grpcProductOptions)
    private readonly productGrpc: ClientGrpc;


    private invoiceService: any;
    private clientService: any;
    private productService: any;

    onModuleInit(){
        this.invoiceService = this.invoiceGrpc.getService('InvoiceService');
        this.clientService = this.clientGrpc.getService('ClientService');
        this.productService = this.productGrpc.getService('ProductService');
    }

    @Query(returns=> InvoiceGql,{name: 'invoice'})
    async getInvoice(@Args('id',{type: ()=>Int}) id:number): Promise<IInvoice>{
        const invoice = await this.invoiceService.findOne({id:id});
        return invoice;
    }

    @ResolveField()
    async client(@Parent() clientParent: InvoiceGql){
        const id = clientParent.clientId;
        const client = await this.clientService.findOne({id});
        return  client;
    }
}