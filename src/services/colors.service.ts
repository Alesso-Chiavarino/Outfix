import { API_URL } from "@/config/services.config"

export class ColorsService {
    static async getColors() {
        const res = await fetch(`${API_URL}/api/colors`)
        const data = await res.json()
        return data
    }
}