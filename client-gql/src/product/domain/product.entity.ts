import { IProduct } from "src/api-interfaces";

export class Product implements IProduct{
    id: number;
    name: string;
}