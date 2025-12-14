import { ProductsService } from '@/services/products.service'
import { CategoriesService } from '@/services/categories.service'
import { ProductCard } from '@/components/ProductCard'
import { notFound } from 'next/navigation'

export default async function CategoryPage({
    params,
}: {
    params: { category: string }
}) {
    const slug = decodeURIComponent(params.category)
    console.log("SLUG", slug)
    const categories = await CategoriesService.getCategories()
    const category = categories.find(c => c.slug.toLowerCase() === slug.toLowerCase())
    console.log("category", category)
    console.log("categories", categories)

    if (!category) {
        notFound()
    }

    const products = await ProductsService.getProductsByCategory(
        category.id,
        24
    )

    return (
        <main className="container mx-auto px-6 py-10 flex flex-col gap-12">

            <section className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold capitalize">
                    {category.title}
                </h1>
                <p className="text-gray-500 text-sm">
                    {products.length} productos encontrados
                </p>
            </section>

            {products.length === 0 ? (
                <div className="py-20 text-center text-gray-500">
                    No hay productos en esta categoría
                </div>
            ) : (
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            category={category}
                        />
                    ))}
                </section>
            )}
        </main>
    )
}