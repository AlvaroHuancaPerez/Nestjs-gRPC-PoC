export interface ILineDetail{
    productId: number;
    quantity: number;
}

export interface IInvoice{
    id: number;
    clientId: number;
    lines: ILineDetail[];
}

export interface IInvoiceGql extends IInvoice {}
export interface ILineDetailGql extends ILineDetail {}
