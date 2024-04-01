import { ProductsService } from "@/services/products.service"
import { CloudinaryUtils } from "@/utils/cloudinary.utils"
import { writeFile, rm } from "fs/promises"
import { NextResponse } from "next/server"
import path from "path"


export async function POST(request: any) {
    try {
        const data = await request.formData()
        const rawFormData = Object.fromEntries(data)

        const productFiles: File[] = []
        Object.keys(rawFormData).map(key => {
            if (typeof rawFormData[key] === 'object' && rawFormData[key].type) {
                productFiles.push(rawFormData[key])
            }
        })

        if (productFiles.length === 0) {
            return NextResponse.json('No files found', { status: 400 })
        }

        const cloudinaryUtils = new CloudinaryUtils();

        const productImagesPromises = productFiles.map(async file => {
            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            const filePath = path.join(process.cwd(), 'public', file.name)
            await writeFile(filePath, buffer)

            const response = await cloudinaryUtils.uploadImage(filePath)

            await rm(filePath)

            return response.url
        })

        const productImages = await Promise.all(productImagesPromises)

        const product = {
            Category: rawFormData.Category,
            Title: rawFormData.Title,
            Description: rawFormData.Description,
            Stock: Number(rawFormData.Stock),
            Price: Number(rawFormData.Price),
            Images: productImages
        }

        await ProductsService.createProduct(product)

        return NextResponse.json({
            message: 'Product created successfully',
            product,
            status: 201
        })
    }
    catch (error: any) {
        return NextResponse.json('An error occurred', { status: 500, statusText: error.message })
    }

}
