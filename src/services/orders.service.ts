// services/orders.service.ts
import { OutfixApi } from "@/config/axios.config"
import { API_URL } from "@/config/services.config"
import { IOrder } from "@/models/IOrder"

export class OrdersService {
    static async getMyOrders(): Promise<IOrder[]> {
        const api = new OutfixApi(false)
        const res = await api.Get(`${API_URL}/api/orders`)
        return res.data
    }
}