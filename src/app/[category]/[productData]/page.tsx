import { ImagesSlider } from "@/components/ImagesSlider"
import { ProductCard } from "@/components/ProductCard"
import { ProductDetails } from "@/components/ProductDetails"
import { ProductsService } from "@/services/products.service"
import Link from "next/link"

export default async function page({ params }: {
    params: {
        category: string
        productData: string
    }
}) {
    const productId = params.productData.split('-outfix-')[1]

    const product = await ProductsService.getProductDetail(productId)
    // console.log("DATA", product.category.id, product.id)
    const relatedProducts = await ProductsService.getRelatedProducts(
        product.category.id,
        product.id,
        8
    )

    console.log("relatedProducts", relatedProducts)

    return (
        <main className="min-h-[94vh] container mx-auto p-10 flex flex-col gap-16">

            {/* DETALLE */}
            <section className="flex gap-10">
                <div className="w-1/2">
                    <ImagesSlider images={product.images} />
                </div>

                <div className="w-1/2 border rounded-lg p-6">
                    <ProductDetails product={product} />
                </div>
            </section>

            <section className="max-w-3xl">
                <h3 className="text-xl font-semibold mb-2">Descripción</h3>
                <p className="text-gray-700">{product.description}</p>
            </section>

            {/* RELACIONADOS */}
            <div className="my-5 border-t border-gray-200" />
            {relatedProducts.length > 0 && (
                <section className="mt-20">
                    <h3 className="text-2xl font-semibold mb-6">
                        Productos relacionados
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}