import { IInvoice, ILineDetail } from "src/api-interfaces";

export class LineDetail implements ILineDetail{
    productId: number;
    quantity: number;
}

export class Invoice implements IInvoice{
    id: number;
    clientId: number;
    lines: LineDetail[];
}