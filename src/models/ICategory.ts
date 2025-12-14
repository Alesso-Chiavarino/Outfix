export enum CategoryTypes {
    Tshirts = 'Remeras',
    Jackets = 'Camperas',
    Pants = 'Pantalones',
    Shoes = 'Zapatos',
    Accessories = 'Accesorios'
}

export const Categories = Object.values(CategoryTypes)
export interface ICategory {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    active: boolean;
    parentId: string | null;
    banner: string;
}