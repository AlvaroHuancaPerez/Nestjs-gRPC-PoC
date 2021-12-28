import { Field, ObjectType } from "@nestjs/graphql";
import { IProductGql } from "src/api-interfaces";

@ObjectType()
export class ProductGql implements IProductGql {
    @Field()
    id: number;
    
    @Field()
    name: string;
}