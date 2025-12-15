import { OutfixApi } from "@/config/axios.config";
import { API_URL } from "@/config/services.config";
import { ICart, ICartItem, ICartView } from "@/models/ICart";

export class CartService {

    // 🔹 Obtener carrito del usuario logueado
    static async getCart(): Promise<ICartView> {
        const api = new OutfixApi(false);
        const res = await api.Get(`${API_URL}/api/cart`);
        return res.data;
    }

    // 🔹 Agregar item al carrito
    static async addItem(item: ICartItem): Promise<ICart> {
        const api = new OutfixApi(false);
        const res = await api.Post(`${API_URL}/api/cart/items`, item);
        return res.data;
    }

    // 🔹 Actualizar cantidad de un item
    static async updateItemQuantity(
        productId: string,
        variantId: string,
        quantity: number
    ): Promise<ICart> {
        const api = new OutfixApi(false);
        const res = await api.Put(`${API_URL}/api/cart/items`, {
            productId,
            variantId,
            quantity,
        });
        return res.data;
    }

    static async removeItem(
        productId: string,
        variantId: string
    ): Promise<void> {
        const api = new OutfixApi(false);
        await api.Delete(
            `${API_URL}/api/cart/items?productId=${productId}&variantId=${variantId}`
        );
    }

    static async clearCart(): Promise<void> {
        const api = new OutfixApi(false);
        await api.Delete(`${API_URL}/api/cart`);
    }
}