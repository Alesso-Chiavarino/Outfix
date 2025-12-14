import { toast } from 'sonner';

export class Utils {
    static renderToast(message: string, type?: string) {
        toast(message, {
            position: 'top-right',
            duration: 3000
        })
    }

    public static slugify = (text: string) =>
        text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // saca acentos
            .replace(/[^a-z0-9]+/g, "-")     // reemplaza todo por -
            .replace(/(^-|-$)/g, "");        // limpia bordes

    public static parseVariantId = (variantId: string) => {
        const [size, colorId] = variantId.split('_')
        return { size, colorId }
    }
}