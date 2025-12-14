import { API_URL } from "@/config/services.config"
import { ICategory } from "@/models/ICategory"

export class CategoriesService {
    static async getCategories(): Promise<ICategory[]> {
        const res = await fetch(`${API_URL}/api/categories`)
        const data = await res.json()
        return data
    }
}