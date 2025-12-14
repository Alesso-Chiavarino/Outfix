import { Product } from '@/models/IProduct'
import Link from 'next/link'
import React from 'react'

export const ProductCard = ({ product, openEdit }: { product: Product, openEdit?: (product: Product) => void }) => {
    return (
        <div
            key={product.id}
            className="group relative bg-white border border-gray-200 
                                rounded-xl overflow-hidden shadow-sm hover:shadow-md 
                                transition-all duration-200"
        >
            {/* Imagen */}
            <div className="relative w-full aspect-[4/5] bg-gray-50">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />

                {product.draft && (
                    <span className="
                                            absolute top-3 left-3 text-xs font-medium
                                            bg-yellow-400 text-black px-2 py-0.5 rounded-full shadow
                                        ">
                        Borrador
                    </span>
                )}

                {openEdit && (
                    <button
                        onClick={() => openEdit(product)}
                        className="
                                            absolute top-3 right-3 bg-black/80 text-white 
                                            px-2 py-1 text-xs rounded-md opacity-0 
                                            group-hover:opacity-100 transition
                                        "
                    >
                        Editar
                    </button>
                )}

            </div>

            {/* Info */}
            <div className="p-4 flex flex-col">
                <h3 className="font-semibold text-base line-clamp-1">
                    {product.title}
                </h3>

                <p className="font-bold text-lg mt-1">
                    {product.price.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                    })}
                </p>

                <Link
                    href={`/${product.category}/${product.title}-outfix-${product.id}`}
                    className="text-black font-semibold underline text-sm mt-2 inline-block hover:opacity-80"
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}
