import { Inject } from "@nestjs/common";
import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Client, ClientGrpc, Transport } from "@nestjs/microservices";
import { join } from "path";
import { IProduct } from "src/api-interfaces/lib/product";
import { grpcProductOptions } from "src/grpc-product.options";
import { ProductGql } from "./model";

@Resolver(()=> ProductGql)
export class ProductResolver{

    @Client(grpcProductOptions)
    private readonly productGrpc: ClientGrpc;

    private productService: any;

    onModuleInit() {
        console.log(join(__dirname, 'product.proto'));
        this.productService = this.productGrpc.getService('ProductService');
        console.log(`Product Service : ${this.productService} `);
    }

    @Query(returns => ProductGql, {name : 'product'})
    async getProduct(@Args(`id`,{type: ()=>Int}) id : number): Promise<IProduct>{
        console.log(`Product : ${id}`);
        const product = await this.productService.findOne({id: id}).toPromise();
        console.log(product);
        return product;
    }
}