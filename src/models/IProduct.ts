import { CategoryTypes, ICategory } from "./ICategory";
import { IColor } from "./IColor";

export interface CreateProduct {
    Title: string;
    Category: keyof typeof CategoryTypes | '';
    Description: string;
    Images: string[];
    Stock: number;
    Price: number;
    Target: TargetType;
    Draft: boolean;
}

export interface ProductVariant {
    size: string
    color: string
    stock: number
}

export type TargetType = "men" | "women" | "child" | "girl" | "unisex";

export interface CreateProductRequest {
    title: string
    category: keyof typeof CategoryTypes | '';
    description: string;
    images: string[];
    price: number;
    owner: string;
    target: TargetType;
    variants: ProductVariant[];
    draft: boolean;
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
    draft: boolean;
    owner: string;
    target: TargetType;
    variants: ProductVariant[];
}

export interface IProductDetail {
    id: string;
    owner: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    target: string;
    draft: boolean;
    category: ICategory;
    variants: ProductVariant[];
    colors: IColor[];
}