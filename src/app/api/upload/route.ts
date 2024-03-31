import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "@/config/cloudinary.config"
import { ProductsService } from "@/services/products.service"
import { v2 } from "cloudinary"
import { writeFile, rm } from "fs/promises"
import { NextResponse } from "next/server"
import path from "path"

v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

export async function POST(request: any) {
    const data = await request.formData()

    const rawFormData = {
        Category: data.get('Category'),
        Title: data.get('Title'),
        Description: data.get('Description'),
        Image: data.get('Image'),
        Stock: Number(data.get('Stock')),
        Price: Number(data.get('Price'))
    }

    if (!rawFormData.Image) {
        return NextResponse.json('No files found', { status: 400 })
    }

    const bytes = await rawFormData.Image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filePath = path.join(process.cwd(), 'public', rawFormData.Image.name)
    await writeFile(filePath, buffer)

    const response = await v2.uploader.upload(filePath)

    const product = {
        ...rawFormData,
        Image: response.url
    }

    const createdProduct = await ProductsService.createProduct(product)

    return NextResponse.json({
        message: 'Image uploaded',
        createdProduct
    })
}