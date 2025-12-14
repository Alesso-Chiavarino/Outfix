import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"

export class ColorsService {
    static async getColors() {
        const outfixApi = new OutfixApi(false)
        const res = await outfixApi.Get(`${API_URL}/api/colors`)
        const data = res.data
        return data
    }
}