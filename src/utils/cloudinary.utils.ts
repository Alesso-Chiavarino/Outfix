import { v2 as cloudinary } from 'cloudinary';
import { CONFIG } from '../config/env.config';

export class CloudinaryUtils {
    private static isInitialized: boolean = false;

    private constructor() { }

    private static configCloudinary() {
        if (!CloudinaryUtils.isInitialized) {
            cloudinary.config({
                cloud_name: CONFIG.CLOUDINARY_CLOUD_NAME,
                api_key: CONFIG.CLOUDINARY_API_KEY,
                api_secret: CONFIG.CLOUDINARY_API_SECRET
            });
            CloudinaryUtils.isInitialized = true;
        }
    }

    static async uploadImage(filePath: string) {
        CloudinaryUtils.configCloudinary();
        return await cloudinary.uploader.upload(filePath, {
            folder: 'Outfix/products',
        });
    }

    static async deleteImage(public_id: string) {
        CloudinaryUtils.configCloudinary();
        return await cloudinary.uploader.destroy(public_id);
    }
}
