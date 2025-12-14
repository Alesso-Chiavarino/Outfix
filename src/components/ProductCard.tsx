import { ICategory } from '@/models/ICategory'
import { Product } from '@/models/IProduct'
import { Utils } from '@/utils/utils'
import Link from 'next/link'
import React from 'react'

export const ProductCard = ({
    product,
    openEdit,
    category
}: {
    product: Product
    openEdit?: (product: Product) => void
    category?: ICategory
}) => {
    return (
        <div className="group relative flex flex-col gap-3">

            {/* IMAGEN */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">

                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        
                    "
                />

                {/* BORRADOR */}
                {product.draft && (
                    <span
                        className="
                            absolute top-3 left-3
                            text-[11px] tracking-wide uppercase
                            bg-white/90 text-black
                            px-2 py-0.5
                        "
                    >
                        Borrador
                    </span>
                )}

                {openEdit && (
                    <button
                        onClick={() => openEdit(product)}
                        className="
            absolute top-3 right-3
            text-xs text-white
            bg-black/80 px-2 py-1
            opacity-0
            group-hover:opacity-100
            transition
            rounded-md
        "
                    >
                        Editar
                    </button>
                )}
            </div>

            {/* INFO */}
            <div className="flex flex-col gap-1 text-left">


                <h3 className="text-sm text-gray-700 line-clamp-1">
                    {product.title}
                </h3>


                <span className="text-sm font-semibold tracking-tight">
                    {product.price.toLocaleString('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                    })}
                </span>

                {/* LINK */}
                <Link
                    href={`/${category?.slug}/${Utils.slugify(product.title)}-outfix-${product.id}`}
                    className="
                        text-sm font-sans
                        text-gray-600
                        underline underline-offset-4
                        transition
                        w-fit
                    "
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}