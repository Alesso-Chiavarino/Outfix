import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { IColor } from "@/models/IColor"

export class ColorsService {

    static async getColors(): Promise<IColor[]> {
        const api = new OutfixApi(false)
        const res = await api.Get(`${API_URL}/api/colors`)
        return res.data
    }

    static async createColor(payload: Partial<IColor>): Promise<IColor> {
        const api = new OutfixApi(false)
        const res = await api.Post(`${API_URL}/api/colors`, payload)
        return res.data
    }

    static async updateColor(
        id: string,
        payload: Partial<IColor>
    ): Promise<IColor> {
        const api = new OutfixApi(false)
        const res = await api.Put(`${API_URL}/api/colors/${id}`, payload)
        return res.data
    }

    static async deleteColor(id: string): Promise<void> {
        const api = new OutfixApi(false)
        await api.Delete(`${API_URL}/api/colors/${id}`)
    }
}