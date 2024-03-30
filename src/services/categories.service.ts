export class CategoriesService {
    static async getCategories() {
        const res = await fetch('https://outfixapi.azurewebsites.net/api/categories')
        const data = await res.json()
        return data
    }
}