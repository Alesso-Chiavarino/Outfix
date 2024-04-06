import { OutfixApi } from "@/config/axios.config"
import { CreateProduct, Product } from "@/models/IProduct"

export class ProductsService {

    static async getProducts(): Promise<Product[]> {

        const outfixApi = new OutfixApi(false)

        const res = await outfixApi.Get('https://outfixapi.azurewebsites.net/api/products')
        return res.data
    }

    static async getProductById(id: string): Promise<Product> {
        const outfixApi = new OutfixApi(true)

        const res = await outfixApi.Get(`https://outfixapi.azurewebsites.net/api/products/${id}`)
        return res.data
    }

    static async createProduct(data: CreateProduct) {

        const outfixApi = new OutfixApi(true)

        const res = await outfixApi.Post('https://outfixapi.azurewebsites.net/api/products', data)
        return res.data
    }
}