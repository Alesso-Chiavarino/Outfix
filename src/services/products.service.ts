import { axiosInstance } from "@/config/axios.config"
import { CreateProduct } from "@/models/IProduct"

export class ProductsService {
    static async getProducts() {
        const res = await axiosInstance.get('https://outfixapi.azurewebsites.net/api/products')
        return res.data
    }

    static async createProduct(data: CreateProduct) {
        const res = await axiosInstance.post('https://outfixapi.azurewebsites.net/api/products', data)
        return res.data
    }
}