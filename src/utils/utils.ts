import { toast } from 'sonner';

export class Utils {
    static renderToast(message: string, type?: string) {
        toast(message, {
            position: 'top-right',
            duration: 3000
        })
    }
}