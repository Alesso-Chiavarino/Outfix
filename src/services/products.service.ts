import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { CreateProduct, CreateProductRequest, Product } from "@/models/IProduct"

export class ProductsService {

    static async getProducts(): Promise<Product[]> {

        const outfixApi = new OutfixApi(false)

        const res = await outfixApi.Get(`${API_URL}/api/products`)
        return res.data.products
    }

    static async getProductById(id: string): Promise<Product> {
        const outfixApi = new OutfixApi(true)

        const res = await outfixApi.Get(`${API_URL}/api/products/${id}`)
        return res.data
    }

    static async createProduct(data: CreateProductRequest) {

        const outfixApi = new OutfixApi(true)

        console.log("LA DATA", data)
        console.log("`${API_URL}/api/products`", `${API_URL}/api/products`)
        const res = await outfixApi.Post(`${API_URL}/api/products`, data)
        return res.data
    }
}