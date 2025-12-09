import { CategoryTypes } from "./ICategory";

export interface CreateProduct {
    Title: string;
    Category: keyof typeof CategoryTypes | '';
    Description: string;
    Images: string[];
    Stock: number;
    Price: number;
}

export interface CreateProductRequest {
    title: string;
    category: keyof typeof CategoryTypes | '';
    description: string;
    images: string[];
    stock: number;
    price: number;
    owner: string;
}


export interface IEditProduct extends CreateProduct {
    UploadImages: File[];
}

export interface Product {
    id: string;
    category: keyof typeof CategoryTypes;
    title: string;
    description: string;
    images: string[];
    stock: number;
    price: number;
}