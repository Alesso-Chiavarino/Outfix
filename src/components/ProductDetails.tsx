'use client'

import React, { useMemo, useState } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IProductDetail } from '@/models/IProduct'
import { CartService } from '@/services/carts.service'
import { useStore } from '@/store/store'
import { toast } from 'sonner'

export const ProductDetails = ({ product }: { product: IProductDetail }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(
        product.colors?.[0]?.id ?? null
    )
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [isAdding, setIsAdding] = useState(false)

    const { setCart, isLogged } = useStore()

    // 🔹 Talles disponibles según color
    const availableSizes = useMemo(() => {
        if (!selectedColor) return []
        return product.variants
            .filter(v => v.color === selectedColor)
            .map(v => v.size)
    }, [selectedColor, product.variants])

    // 🔹 Variante real seleccionada
    const selectedVariant = useMemo(() => {
        if (!selectedColor || !selectedSize) return null
        return product.variants.find(
            v => v.color === selectedColor && v.size === selectedSize
        )
    }, [selectedColor, selectedSize, product.variants])

    const stock = selectedVariant?.stock ?? 0

    // 🛒 ADD TO CART
    const handleAddToCart = async () => {
        if (!selectedVariant || !selectedColor || !selectedSize) return

        if (!isLogged) {
            toast.error('Tenés que iniciar sesión para comprar')
            return
        }

        const variantId = `${selectedSize}_${selectedColor}`

        try {
            setIsAdding(true)

            const res = await CartService.addItem({
                productId: product.id,
                variantId,
                quantity,
            })


            const cart = await CartService.getCart()

            setCart(cart)
            toast.success('Producto agregado al carrito')
        } catch (err: any) {
            toast.error(err.response?.data || 'Error al agregar al carrito')
        } finally {
            setIsAdding(false)
        }
    }

    return (
        <div className="flex flex-col gap-6">

            {/* TÍTULO */}
            <div className="flex justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-semibold leading-tight">
                        {product.title}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {product.category.title}
                    </p>
                </div>

                {/* <IoIosHeartEmpty
                    size={26}
                    className="cursor-pointer text-gray-600 hover:text-black transition"
                /> */}
            </div>

            {/* PRECIO */}
            <div>
                <span className="text-3xl font-semibold">
                    ${product.price.toLocaleString('es-AR')}
                </span>
                <p className="text-sm text-gray-600 mt-1">
                    en 6 cuotas de $
                    {(product.price / 6).toFixed(2)}
                </p>
            </div>

            {/* COLORES */}
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">Color</span>

                <div className="flex gap-3">
                    {product.colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => {
                                setSelectedColor(color.id)
                                setSelectedSize(null)
                                setQuantity(1)
                            }}
                            className={`
                                w-8 h-8 rounded-full border-2 transition
                                ${selectedColor === color.id
                                    ? 'border-black'
                                    : 'border-gray-300'}
                            `}
                            style={{ backgroundColor: color.code }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            {/* TALLES */}
            {selectedColor && (
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Talle</span>

                    <div className="flex gap-2 flex-wrap">
                        {availableSizes.map(size => (
                            <button
                                key={size}
                                onClick={() => {
                                    setSelectedSize(size)
                                    setQuantity(1)
                                }}
                                className={`
                                    px-4 py-1.5 rounded-md border text-sm transition
                                    ${selectedSize === size
                                        ? 'border-black bg-black text-white'
                                        : 'border-gray-300 hover:border-black'}
                                `}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* STOCK + CANTIDAD */}
            {selectedVariant && (
                <div className="flex flex-col gap-2">
                    {stock > 0 ? (
                        <span className="text-sm text-green-700 font-medium">
                            Stock disponible ({stock})
                        </span>
                    ) : (
                        <span className="text-sm text-red-600 font-medium">
                            Sin stock
                        </span>
                    )}

                    {stock > 0 && (
                        <div className="flex items-center gap-3">
                            <span className="text-sm">Cantidad</span>
                            <select
                                value={quantity}
                                onChange={e => setQuantity(Number(e.target.value))}
                                className="border rounded-md px-2 py-1 text-sm"
                            >
                                {Array.from({ length: Math.min(stock, 10) }, (_, i) => i + 1)
                                    .map(n => (
                                        <option key={n} value={n}>{n}</option>
                                    ))}
                            </select>
                        </div>
                    )}
                </div>
            )}

            {/* CTA */}
            <button
                disabled={!selectedVariant || stock === 0 || isAdding}
                onClick={handleAddToCart}
                className={`
                    mt-4 w-full py-3 rounded-full font-semibold transition
                    ${selectedVariant && stock > 0
                        ? 'bg-black text-white hover:bg-zinc-800'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
                `}
            >
                {isAdding ? 'Agregando…' : 'Agregar al carrito'}
            </button>
        </div>
    )
}