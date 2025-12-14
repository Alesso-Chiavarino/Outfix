import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { CreateProduct, CreateProductRequest, IProductDetail, Product } from "@/models/IProduct"

export class ProductsService {

    static async getProducts(): Promise<Product[]> {

        const outfixApi = new OutfixApi(false)

        const res = await outfixApi.Get(`${API_URL}/api/products`)
        return res.data.products
    }

    static async getUserProducts(userEmail: string): Promise<Product[]> {

        const outfixApi = new OutfixApi(false)

        const res = await outfixApi.Get(`${API_URL}/api/products/user?owner=${userEmail}`)
        return res.data.products
    }

    static async getProductDetail(id: string): Promise<IProductDetail> {
        const outfixApi = new OutfixApi(true)

        const res = await outfixApi.Get(`${API_URL}/api/products/${id}`)
        return res.data
    }

    static async createProduct(data: CreateProductRequest) {

        const outfixApi = new OutfixApi(true)

        const res = await outfixApi.Post(`${API_URL}/api/products`, data)
        return res.data
    }

    static async updateProduct(id: string, data: CreateProductRequest) {
        const outfixApi = new OutfixApi(true)
        const res = await outfixApi.Put(`${API_URL}/api/products/${id}`, data)
        return res.data
    }

    static async getRelatedProducts(
        categoryId: string,
        excludeId: string,
        limit = 8
    ): Promise<Product[]> {
        const outfixApi = new OutfixApi(false)

        const res = await outfixApi.Get(
            `${API_URL}/api/products?category=${categoryId}&limit=${limit}`
        )

        return res.data.products.filter((p: Product) => p.id !== excludeId)
    }
}