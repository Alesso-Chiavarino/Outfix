'use client'

import { useEffect, useState } from 'react'
import { OrdersService } from '@/services/orders.service'
import Link from 'next/link'

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const load = async () => {
            const res = await OrdersService.getMyOrders()
            setOrders(res)
            setLoading(false)
        }
        load()
    }, [])

    if (loading) {
        return (
            <main className="min-h-[93vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-black border-t-transparent" />
            </main>
        )
    }

    if (orders.length === 0) {
        return (
            <main className="min-h-[93vh] flex items-center justify-center flex-col gap-4">
                <h1 className="text-2xl font-semibold">
                    No tenés compras todavía
                </h1>
                <Link href="/" className="underline text-gray-600">
                    Ir a la tienda
                </Link>
            </main>
        )
    }

    return (
        <main className="container mx-auto py-14 max-w-4xl min-h-[93vh]">
            <h1 className="text-3xl font-semibold mb-10">
                Mis pedidos
            </h1>

            <div className="flex flex-col gap-8">
                {orders.map(order => (
                    <div
                        key={order.id}
                        className="border rounded-2xl p-6 shadow-sm flex flex-col gap-5"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                                Pedido #{order.id.slice(-6)}
                            </span>

                            <span
                                className={`text-sm font-medium capitalize
                                    ${order.status === 'approved'
                                        ? 'text-green-600'
                                        : order.status === 'pending'
                                            ? 'text-yellow-600'
                                            : 'text-red-600'}
                                `}
                            >
                                {order.status}
                            </span>
                        </div>

                        <span className="text-sm text-gray-600">
                            {new Date(order.createdAt).toLocaleString()}
                        </span>

                        {/* ITEMS */}
                        <div className="flex flex-col gap-4 border-t pt-4">
                            {order.items.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 items-center"
                                >
                                    {/* Imagen */}
                                    <img
                                        src={item.image || '/placeholder.png'}
                                        alt={item.title || 'Producto'}
                                        className="w-16 h-16 object-cover rounded-lg border"
                                    />

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col">
                                        <span className="font-medium">
                                            {item.title || 'Producto no disponible'}
                                        </span>

                                        <span className="text-sm text-gray-500">
                                            Cantidad: {item.quantity}
                                        </span>
                                    </div>

                                    {/* Precio */}
                                    <span className="font-medium">
                                        $
                                        {(item.unitPrice * item.quantity)
                                            .toLocaleString('es-AR')}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between items-center border-t pt-4">
                            <span className="text-sm text-gray-500">
                                Total
                            </span>
                            <span className="text-xl font-semibold">
                                ${Number(order.total).toLocaleString('es-AR')}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}