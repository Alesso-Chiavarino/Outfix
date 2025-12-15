import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { ICategory } from "@/models/ICategory"

export class CategoriesService {
    static async getCategories(): Promise<ICategory[]> {
        const outfixApi = new OutfixApi(false)
        const res = await outfixApi.Get(`${API_URL}/api/categories`)
        const data = res.data
        return data
    }

    static async getCategoryBySlug(slug: string): Promise<ICategory | null> {
        const categories = await this.getCategories()
        return categories.find(c => c.slug === slug) || null
    }
}