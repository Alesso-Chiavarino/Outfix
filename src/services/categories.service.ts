import { API_URL } from "@/config/services.config"

export class CategoriesService {
    static async getCategories() {
        const res = await fetch(`${API_URL}/api/categories`)
        const data = await res.json()
        return data
    }
}