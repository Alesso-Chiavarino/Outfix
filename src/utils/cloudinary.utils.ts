import { v2 } from 'cloudinary'
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config/cloudinary.config'

export class CloudinaryUtils {

    constructor() {
        this.configCloudinary()
    }

    configCloudinary() {
        v2.config({
            cloud_name: CLOUDINARY_CLOUD_NAME,
            api_key: CLOUDINARY_API_KEY,
            api_secret: CLOUDINARY_API_SECRET
        });
    }

    async uploadImage(filePath: string) {
        return await v2.uploader.upload(filePath, {
            folder: 'Outfix/products',
        })
    }

    async deleteImage(public_id: string) {
        return await v2.uploader.destroy(public_id)
    }

}