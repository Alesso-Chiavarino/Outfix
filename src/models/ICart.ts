export interface ICartItem {
    productId: string;
    productOwnerId: string;
    variantId: string;
    quantity: number;
}

export interface ICart {
    id: string;
    userId: string;
    items: ICartItem[];
    updatedAt: string;
    createdAt: string;
}

export interface ICartItemView {
    productId: string;
    variantId: string;
    quantity: number;

    product: {
        id: string;
        title: string;
        price: number;
        images: string[];
        category: string;
    };

    variant: {
        size: string;
        colorId: string;
    };
}

export interface ICartView {
    id: string;
    items: ICartItemView[];
}