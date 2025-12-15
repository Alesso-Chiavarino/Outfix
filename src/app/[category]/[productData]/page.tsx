import { ImagesSlider } from "@/components/ImagesSlider"
import { ProductCard } from "@/components/ProductCard"
import { ProductDetails } from "@/components/ProductDetails"
import { ProductsService } from "@/services/products.service"
import { CategoriesService } from "@/services/categories.service"
import { notFound } from "next/navigation"

export default async function Page({
    params,
}: {
    params: {
        category: string
        productData: string
    }
}) {
    const { category: categorySlug, productData } = params

    // 1️⃣ Resolver categoría por slug
    const category = await CategoriesService.getCategoryBySlug(categorySlug)
    if (!category) notFound()

    // 2️⃣ Obtener productId
    const productId = productData.split("-outfix-")[1]
    if (!productId) notFound()

    // 3️⃣ Obtener producto
    const product = await ProductsService.getProductDetail(productId)
    if (!product) notFound()

    // 4️⃣ Validar que el producto pertenezca a la categoría
    if (product.category.id !== category.id) {
        notFound()
    }

    // 5️⃣ Relacionados por categoría
    const relatedProducts = await ProductsService.getRelatedProducts(
        category.id,
        product.id,
        8
    )

    return (
        <main className="min-h-[94vh] container mx-auto p-10 flex flex-col gap-16">

            <section className="flex gap-10">
                <div className="w-1/2">
                    <ImagesSlider images={product.images} />
                </div>

                <div className="w-1/2 border rounded-lg p-6">
                    <ProductDetails product={product} />
                </div>
            </section>

            {/* DESCRIPCIÓN */}
            <section className="max-w-3xl">
                <h3 className="text-xl font-semibold mb-2">Descripción</h3>
                <p className="text-gray-700">{product.description}</p>
            </section>

            {/* RELACIONADOS */}
            {relatedProducts.length > 0 && (
                <>
                    <div className="my-5 border-t border-gray-200" />
                    <section>
                        <h3 className="text-2xl font-semibold mb-6">
                            Más de {category.title}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} category={category} />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </main>
    )
}