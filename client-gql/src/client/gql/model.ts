import { Field, ObjectType } from "@nestjs/graphql";
import { IClientGql } from "src/api-interfaces/lib/client";

@ObjectType()
export class ClientGql implements IClientGql{
    @Field()
    id: number;
    @Field()
    name: string;
}