import { axiosInstance } from "@/config/axios.config"

export class ProductsService {
    static async getProducts() {
        const res = await axiosInstance.get('https://outfixapi.azurewebsites.net/api/products')
        return res.data
    }
}