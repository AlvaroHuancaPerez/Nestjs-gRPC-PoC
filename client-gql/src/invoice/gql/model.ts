import { Field, ObjectType } from "@nestjs/graphql";
import { IInvoiceGql, ILineDetail } from "src/api-interfaces";
import { ClientGql } from "src/client/gql/model";
import { ProductGql } from "src/product/gql/model";

@ObjectType()
export class LineDetailGql implements ILineDetail{
    @Field()
    productId: number;

    @Field(type=> ProductGql)
    product: ProductGql;

    @Field()
    quantity: number;
}

@ObjectType()
export class InvoiceGql implements IInvoiceGql{
    @Field()
    id: number;
    @Field()
    clientId: number;
    @Field(type => ClientGql)
    client: ClientGql;
    @Field(type=> [LineDetailGql])
    lines: LineDetailGql[];
}
