import { ImagesSlider } from "@/components/ImagesSlider"
import { ProductDetails } from "@/components/ProductDetails";
import { ProductsService } from "@/services/products.service"

export default async function page({ params }: {
    params: {
        category: string,
        productData: string
    }
}) {

    const { category, productData } = params

    const productId = productData.split('--')[1]

    const product = await ProductsService.getProductById(productId)

    return (
        <main className="min-h-screen container flex p-10 flex-col mx-auto gap-10 items-center">

            <article className="h-full w-full flex flex-col gap-6">

                <div className="flex h-fit w-full gap-10">
                    <div className="w-[50%] h-full">
                        <ImagesSlider images={product.images} />
                    </div>

                    <div className="w-[50%] h-full border-[1px] rounded-md border-gray-300 p-5 flex flex-col gap-5">
                        <ProductDetails product={{
                            title: product.title,
                            price: product.price,
                            stock: product.stock
                        }} />
                    </div>

                </div>

                <hr />

                <div>
                    <p>{product.description}</p>
                </div>
            </article>

        </main >
    )
}
