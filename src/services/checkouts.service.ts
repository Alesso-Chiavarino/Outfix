import { OutfixApi } from "@/config/axios.config";
import { API_URL } from "@/config/services.config";

export class CheckoutsService {
    static async createCheckout(): Promise<{ initPoint: string }> {
        const api = new OutfixApi(false);
        const res = await api.Post(`${API_URL}/api/checkout`, {});
        return res.data;
    }
}