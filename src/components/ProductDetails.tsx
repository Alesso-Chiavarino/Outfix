import React from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'

export const ProductDetails = ({ product }: {
    product: {
        title: string,
        price: number,
        stock: number
    }
}) => {
    return (
        <>
            <div className="flex text-3xl justify-between items-center font-semibold">
                {/* TODO ADD STARS RATING */}
                <h2 className="">{product.title}</h2>
                <IoIosHeartEmpty className="cursor-pointer" />
            </div>
            <div>
                <span className="text-2xl font-semibold">$ {product.price}</span>
                <p>en 6 cuotas de $ {Math.round((product.price / 6) * 100) / 100}</p>
            </div>
            <div className="flex flex-col gap-2">
                {product.stock > 0 ? (
                    product.stock === 1 ? <p>¡Último disponible!</p> : <p>Stock disponible</p>
                ) : <p>Sin stock</p>}

                <div className="flex gap-2 items-center">
                    <span>cantidad: </span>
                    <select name="quantity" id="quantity" className="w-fit">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={'more'}>Más unidades</option>
                    </select>
                    <span className="text-gray-500">({product.stock} disponibles)</span>
                </div>

            </div>
        </>
    )
}
