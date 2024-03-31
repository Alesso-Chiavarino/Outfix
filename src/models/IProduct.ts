import { CategoryTypes } from "./ICategory";

export interface CreateProduct {
    Title: string;
    Category: keyof typeof CategoryTypes | '';
    Description: string;
    Image: string;
    Stock: number;
    Price: number;
}

export interface IEditProduct extends CreateProduct {
    Files: File[];
}