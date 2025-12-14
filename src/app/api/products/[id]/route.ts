import { ProductsService } from "@/services/products.service"
import { NextResponse } from "next/server"
import { writeFile, rm } from "fs/promises"
import path from "path"
import { CloudinaryUtils } from "@/utils/cloudinary.utils"
import { CreateProductRequest } from "@/models/IProduct"

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const data = await request.formData()
        const rawFormData = Object.fromEntries(data)

        const variantsJson = rawFormData.Variants
            ? JSON.parse(rawFormData.Variants.toString())
            : []

        const existingImages = rawFormData.ExistingImages
            ? JSON.parse(rawFormData.ExistingImages.toString())
            : [];


        const productFiles: File[] = [];

        Object.keys(rawFormData).forEach(key => {
            const value = rawFormData[key];

            const isFile =
                value &&
                typeof value === "object" &&
                typeof value.arrayBuffer === "function" &&
                typeof value.name === "string";

            if (isFile) {
                productFiles.push(value as File);
            }
        });

        let uploadedImages: string[] = [];

        if (productFiles.length > 0) {
            uploadedImages = await Promise.all(
                productFiles.map(async (file) => {
                    const bytes = await file.arrayBuffer();
                    const buffer: any = Buffer.from(bytes);

                    const tempPath = path.join(process.cwd(), "public", file.name);
                    await writeFile(tempPath, buffer);

                    const uploaded = await CloudinaryUtils.uploadImage(tempPath);

                    await rm(tempPath);
                    return uploaded.url;
                })
            );
        }

        const finalImages = [...existingImages, ...uploadedImages];

        const product = {
            id: params.id,
            title: rawFormData.Title?.toString() ?? "",
            category: rawFormData.Category?.toString() ?? "",
            description: rawFormData.Description?.toString() ?? "",
            price: Number(rawFormData.Price ?? 0),
            owner: rawFormData.Owner?.toString() ?? "",
            target: rawFormData.Target?.toString() ?? "",
            variants: variantsJson,
            draft: rawFormData.Draft === "true",
            images: finalImages
        }

        console.log("product", product)
        await ProductsService.updateProduct(params.id, product as CreateProductRequest)

        return NextResponse.json(
            { message: "Product updated successfully", product },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Internal error" },
            { status: 500 }
        )
    }
}