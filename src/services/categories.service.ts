import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { ICategory } from "@/models/ICategory"

export class CategoriesService {

    static async getCategories(): Promise<ICategory[]> {
        const api = new OutfixApi(false)
        const res = await api.Get(`${API_URL}/api/categories`)
        return res.data
    }

    static async getCategoryById(id: string): Promise<ICategory> {
        const api = new OutfixApi(false)
        const res = await api.Get(`${API_URL}/api/categories/${id}`)
        return res.data
    }

    static async createCategory(payload: Partial<ICategory>): Promise<ICategory> {
        const api = new OutfixApi(false)
        const res = await api.Post(`${API_URL}/api/categories`, payload)
        return res.data
    }

    static async updateCategory(
        id: string,
        payload: Partial<ICategory>
    ): Promise<ICategory> {
        const api = new OutfixApi(false)
        const res = await api.Put(`${API_URL}/api/categories/${id}`, payload)
        return res.data
    }

    static async deleteCategory(id: string): Promise<void> {
        const api = new OutfixApi(false)
        await api.Delete(`${API_URL}/api/categories/${id}`)
    }

    static async getCategoryBySlug(slug: string): Promise<ICategory | null> {
        const categories = await this.getCategories()
        return categories.find(c => c.slug === slug) || null
    }
}