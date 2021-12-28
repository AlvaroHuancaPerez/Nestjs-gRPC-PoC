import { Inject, Logger, OnModuleInit } from "@nestjs/common";
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { IClient } from "src/api-interfaces/lib/client";
import { grpcClientOptions } from "src/grpc-client.options";
import { ClientGql } from "./model";

@Resolver(()=> ClientGql)
export class ClientResolver{

    @Client(grpcClientOptions)
    private readonly clientGrpc: ClientGrpc;

    private clientService: any;

    onModuleInit(){
        this.clientService = this.clientGrpc.getService('ClientService');
        console.log(`Client Service : `);
        Logger.log(Object.keys(this.clientService));
    }

    @Query(returns => ClientGql, {name: 'client'})
    async getClient(@Args('id',{type: ()=> Int}) id: number): Promise<IClient>{
        const client =  await this.clientService.findOne({ id:id });
        return client;
    }
}