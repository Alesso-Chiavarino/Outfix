'use client'

import { useEffect, useState } from 'react'
import { CategoriesService } from '@/services/categories.service'
import { ICategory } from '@/models/ICategory'
import { FaPlus, FaTrash, FaPencilAlt } from 'react-icons/fa'
import { Drawer } from '@/components/Drawer'
import { CategoryCreatorPanel } from './components/CategoryCreatorPanel/CategoryCreatorPanel'

export default function CategoriesPage() {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [loading, setLoading] = useState(true)

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [editingCategory, setEditingCategory] = useState<ICategory | null>(null)

    const load = async () => {
        setLoading(true)
        const data = await CategoriesService.getCategories()
        setCategories(data)
        setLoading(false)
    }

    useEffect(() => {
        load()
    }, [])

    if (loading) {
        return (
            <main className="flex justify-center py-20">
                <span className="text-gray-500">Cargando categorías…</span>
            </main>
        )
    }

    return (
        <>
            <main className="w-full px-10 py-10 flex flex-col gap-10">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">
                        Categorías
                    </h1>

                    <button
                        onClick={() => {
                            setEditingCategory(null)
                            setDrawerOpen(true)
                        }}
                        className="
                            flex items-center gap-2
                            bg-black text-white
                            px-4 py-2
                            rounded-lg
                            hover:bg-zinc-800
                            transition
                        "
                    >
                        <FaPlus size={14} />
                        Nueva categoría
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className="
                                border rounded-xl overflow-hidden
                                bg-white shadow-sm
                                hover:shadow-md transition
                            "
                        >
                            {category.banner && (
                                <img
                                    src={category.banner}
                                    alt={category.title}
                                    className="h-36 w-full object-cover"
                                />
                            )}

                            <div className="p-4 flex flex-col gap-3">
                                <div>
                                    <h3 className="font-medium">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        /{category.slug}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {category.description}
                                </p>

                                <div className="flex justify-end gap-3 pt-2">
                                    <button
                                        onClick={() => {
                                            setEditingCategory(category)
                                            setDrawerOpen(true)
                                        }}
                                        className="text-gray-500 hover:text-black"
                                        title="Editar"
                                    >
                                        <FaPencilAlt size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* DRAWER */}
            <Drawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false)
                    setEditingCategory(null) // 🔥 reset al cerrar
                }}
                title={editingCategory ? 'Editar categoría' : 'Nueva categoría'}
            >
                <CategoryCreatorPanel
                    editingCategory={editingCategory}
                    onSuccess={() => {
                        setDrawerOpen(false)
                        setEditingCategory(null) // 🔥 reset al crear/editar
                        load()
                    }}
                />
            </Drawer>
        </>
    )
}