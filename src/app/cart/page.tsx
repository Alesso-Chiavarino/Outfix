'use client'

import { useEffect, useState } from 'react'
import { useStore } from '@/store/store'
import { CartService } from '@/services/carts.service'
import Link from 'next/link'
import { Utils } from '@/utils/utils'
import { toast } from "sonner";
import { useRouter } from 'next/navigation'

export default function CartPage() {
    const { cart, setCart, isLogged, colors, categories } = useStore()
    const [updating, setUpdating] = useState<string | null>(null)
    const [removing, setRemoving] = useState<string | null>(null)
    const [clearing, setClearing] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (!isLogged) {
            router.replace('/login')
            return
        }

        const loadCart = async () => {
            const res = await CartService.getCart()
            setCart(res)
        }

        loadCart()
    }, [isLogged])

    /* 🔒 NO LOGUEADO */
    if (!isLogged) {
        return (
            <main className="container mx-auto py-24 text-center">
                <h1 className="text-2xl font-semibold mb-4">
                    Iniciá sesión para ver tu carrito
                </h1>
                <Link href="/login" className="underline text-gray-600">
                    Ir al login
                </Link>
            </main>
        )
    }

    /* 🛒 EMPTY STATE */
    if (!cart || cart.items.length === 0) {
        return (
            <main className="container mx-auto py-52 text-center max-w-md min-h-[92vh]">
                <h1 className="text-3xl font-semibold mb-4">
                    Tu carrito está vacío
                </h1>
                <p className="text-gray-500 mb-8">
                    Todavía no agregaste productos.
                    Explorá la tienda y encontrá lo que te gusta.
                </p>

                <Link
                    href="/"
                    className="
                        inline-block
                        bg-black text-white
                        px-8 py-3
                        rounded-full
                        hover:bg-zinc-800
                        transition
                    "
                >
                    Ver productos
                </Link>
            </main>
        )
    }

    /* 🔢 SUBTOTAL */
    const subtotal = cart.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    )

    /* 🔁 UPDATE QTY */
    const updateQuantity = async (
        productId: string,
        variantId: string,
        quantity: number
    ) => {
        if (quantity < 1) return

        const key = `${productId}_${variantId}`
        setUpdating(key)

        try {
            await CartService.updateItemQuantity(
                productId,
                variantId,
                quantity
            )

            const cart = await CartService.getCart()
            setCart(cart)
        } catch (err: any) {
            toast.error(err.response.data || 'Error al actualizar la cantidad')
        }
        finally {
            setUpdating(null)
        }
    }

    /* ❌ REMOVE ITEM */
    const removeItem = async (productId: string, variantId: string) => {
        const key = `${productId}_${variantId}`
        setRemoving(key)

        try {
            await CartService.removeItem(productId, variantId)
            const cart = await CartService.getCart()
            setCart(cart)
        } finally {
            setRemoving(null)
        }
    }

    const clearCart = async () => {
        toast(
            "¿Vaciar carrito?",
            {
                description: "Se eliminarán todos los productos del carrito.",
                action: {
                    label: "Vaciar",
                    onClick: async () => {
                        toast.loading("Vaciando carrito...", {
                            id: "clear-cart-toast",
                        });

                        setClearing(true);

                        try {
                            await CartService.clearCart();
                            setCart(null);

                            toast.success("Carrito vacío", {
                                id: "clear-cart-toast",
                            });
                        } catch {
                            toast.error("Error al vaciar el carrito", {
                                id: "clear-cart-toast",
                            });
                        } finally {
                            setClearing(false);
                        }
                    },
                },
                cancel: {
                    label: "Cancelar",
                    onClick: () => {
                        toast.dismiss();
                    },
                },
            }
        );
    };

    return (
        <main className="container mx-auto py-14 max-w-5xl min-h-[92vh]">
            <h1 className="text-3xl font-semibold mb-10">
                Carrito de compras
            </h1>

            {/* ITEMS */}
            <div className="flex flex-col gap-6">
                {cart.items.map((item, idx) => {
                    const color =
                        colors.find(c => c.id === item.variant.colorId)?.name ??
                        'Desconocido'

                    const category = categories.find(
                        c => c.id === item.product.category
                    )

                    const productUrl = category
                        ? `/${category.slug}/${Utils.slugify(
                            item.product.title
                        )}-outfix-${item.product.id}`
                        : '#'

                    const key = `${item.productId}_${item.variantId}`
                    const loadingQty = updating === key
                    const loadingRemove = removing === key

                    return (
                        <div
                            key={idx}
                            className="
                                flex gap-6 items-center
                                border rounded-xl p-4
                                shadow-sm
                            "
                        >
                            <img
                                src={item.product.images[0]}
                                alt={item.product.title}
                                className="w-24 h-24 object-cover rounded-lg border"
                            />

                            <div className="flex-1 flex flex-col gap-1">
                                <Link href={productUrl} className="hover:underline">
                                    <h3 className="font-medium">
                                        {item.product.title}
                                    </h3>
                                </Link>

                                <span className="text-sm text-gray-500">
                                    Talle: {item.variant.size} · Color: {color}
                                </span>

                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-sm">Cantidad</span>
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        disabled={loadingQty || loadingRemove}
                                        onChange={e =>
                                            updateQuantity(
                                                item.productId,
                                                item.variantId,
                                                Number(e.target.value)
                                            )
                                        }
                                        className="
                                            w-20 border rounded-md
                                            px-2 py-1 text-center text-sm
                                        "
                                    />
                                </div>

                                <button
                                    onClick={() =>
                                        removeItem(item.productId, item.variantId)
                                    }
                                    disabled={loadingRemove}
                                    className="text-sm text-red-600 mt-2 hover:underline w-fit"
                                >
                                    Eliminar
                                </button>
                            </div>

                            <div className="text-right min-w-[120px]">
                                <span className="text-lg font-semibold">
                                    $
                                    {(item.product.price * item.quantity)
                                        .toLocaleString('es-AR')}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* RESUMEN */}
            <div className="mt-12 flex justify-between items-start border-t pt-6">
                <button
                    onClick={clearCart}
                    disabled={clearing}
                    className="text-sm text-red-600 hover:underline"
                >
                    Vaciar carrito
                </button>

                <div className="text-right">
                    <p className="text-sm text-gray-500">
                        Subtotal ({cart.items.length} productos)
                    </p>
                    <p className="text-2xl font-semibold">
                        ${subtotal.toLocaleString('es-AR')}
                    </p>

                    <Link
                        href="/checkout"
                        className="
                            mt-4 inline-block
                            bg-black text-white
                            px-8 py-3
                            rounded-full
                            hover:bg-zinc-800
                            transition
                        "
                    >
                        Finalizar compra
                    </Link>
                </div>
            </div>
        </main>
    )
}