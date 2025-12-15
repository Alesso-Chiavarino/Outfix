import { ProductsService } from "@/services/products.service"
import { CloudinaryUtils } from "@/utils/cloudinary.utils"
import { writeFile, rm } from "fs/promises"
import { NextResponse } from "next/server"
import path from "path"

export async function POST(request: Request) {
    try {
        const data = await request.formData();

        const rawFormData = Object.fromEntries(data);
        const variantsJson = rawFormData.Variants ? JSON.parse(rawFormData.Variants.toString()) : []

        const productFiles: File[] = [];
        Object.keys(rawFormData).forEach(key => {
            const value = rawFormData[key];

            const isFile =
                value &&
                typeof value === "object" &&
                typeof value.arrayBuffer === "function" &&
                typeof value.name === "string" &&
                typeof value.size === "number";

            if (isFile) {
                productFiles.push(value);
            }
        });


        if (productFiles.length === 0) {
            return NextResponse.json({ message: "No images provided" }, { status: 400 });
        }

        const uploadedImages = await Promise.all(
            productFiles.map(async file => {
                const bytes = await file.arrayBuffer();
                const buffer: any = Buffer.from(bytes);

                const tempPath = path.join(process.cwd(), "public", file.name);
                await writeFile(tempPath, buffer);

                const uploaded = await CloudinaryUtils.uploadImage(tempPath);

                await rm(tempPath);
                return uploaded.url;
            })
        );
        const product = {
            title: rawFormData.Title.toString(),
            category: rawFormData.Category.toString() as keyof typeof import('@/models/ICategory').CategoryTypes,
            description: rawFormData.Description.toString(),
            price: Number(rawFormData.Price),
            images: uploadedImages,
            owner: rawFormData.Owner.toString(),
            target: rawFormData.Target.toString() as any,
            variants: variantsJson,
            draft: rawFormData.Draft === 'true' ? true : false
        };


        await ProductsService.createProduct(product);

        return NextResponse.json({
            message: "Product created successfully",
            product
        }, { status: 201 });
    }
    catch (error: any) {
        return NextResponse.json({
            error: error.message || "Internal error"
        }, { status: 500 });
    }
}