'use client'

import React from 'react'
import Link from 'next/link'
import { useStore } from '@/store/store'

export const Footer = () => {
    const { categories } = useStore()

    // 👉 Tomamos solo algunas categorías para el footer
    const footerCategories = categories
        .filter(c => c.active)
        .slice(0, 4) // ajustá el número si querés más / menos

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* BRAND */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-semibold tracking-wide">
                            Outfix
                        </h2>
                        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                            Moda urbana, simple y funcional.
                            Diseñada para acompañarte todos los días.
                        </p>
                    </div>

                    {/* CATEGORÍAS */}
                    <div className="flex flex-col gap-3 text-sm">
                        <span className="font-medium text-white">
                            Categorías de Interés
                        </span>

                        {footerCategories.map(category => (
                            <Link
                                key={category.id}
                                href={`/${category.slug}`}
                                className="text-gray-400 hover:text-white transition w-fit"
                            >
                                {category.title}
                            </Link>
                        ))}
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col gap-3 text-sm">
                        <span className="font-medium text-white">
                            Cuenta
                        </span>

                        <Link
                            href="admin/orders"
                            className="text-gray-400 hover:text-white transition w-fit"
                        >
                            Mis pedidos
                        </Link>

                        <Link
                            href="/cart"
                            className="text-gray-400 hover:text-white transition w-fit"
                        >
                            Carrito
                        </Link>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-zinc-800 my-10" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <span>
                        © {new Date().getFullYear()} Outfix.
                        Todos los derechos reservados.
                    </span>

                    <div className="flex gap-6">
                        <span className="cursor-default hover:text-white transition">
                            Argentina
                        </span>
                        <span className="cursor-default hover:text-white transition">
                            Pagos con Mercado Pago
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}