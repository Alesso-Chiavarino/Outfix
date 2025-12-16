'use client'

import { useEffect, useMemo, useState } from 'react'
import { IColor } from '@/models/IColor'
import { ColorsService } from '@/services/colors.service'
import { Drawer } from '@/components/Drawer'
import { ColorCreatorPanel } from './components/ColorCreatorPanel/ColorCreatorPanel'
import { FiPlus, FiSearch, FiEdit } from 'react-icons/fi'

export default function ColorsPage() {
    const [colors, setColors] = useState<IColor[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [editingColor, setEditingColor] = useState<IColor | null>(null)

    const loadColors = async () => {
        setLoading(true)
        const data = await ColorsService.getColors()
        setColors(data)
        setLoading(false)
    }

    useEffect(() => {
        loadColors()
    }, [])

    const filteredColors = useMemo(() => {
        const q = search.toLowerCase()
        return colors.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.slug.toLowerCase().includes(q)
        )
    }, [colors, search])

    if (loading) {
        return (
            <main className="flex justify-center py-20">
                <span className="text-gray-500">Cargando colores…</span>
            </main>
        )
    }

    return (
        <main className="w-full px-10 py-10 flex flex-col gap-10">

            {/* HEADER */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Colores</h1>

                <button
                    onClick={() => {
                        setEditingColor(null)
                        setDrawerOpen(true)
                    }}
                    className="
                        flex items-center gap-2
                        bg-black text-white
                        px-4 py-2 rounded-lg
                        hover:bg-zinc-800 transition
                    "
                >
                    <FiPlus size={18} />
                    Nuevo color
                </button>
            </div>

            {/* SEARCH */}
            <div className="relative max-w-sm">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar color…"
                    className="pl-10 border rounded-lg px-3 py-2 w-full"
                />
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredColors.map(color => (
                    <div
                        key={color.id}
                        className="
                            border rounded-xl p-4
                            bg-white shadow-sm
                            hover:shadow-md transition
                            flex items-center justify-between
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full border"
                                style={{ backgroundColor: color.code }}
                            />

                            <div>
                                <h3 className="font-medium">{color.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {color.code}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setEditingColor(color)
                                setDrawerOpen(true)
                            }}
                            className="text-gray-500 hover:text-black"
                            title="Editar"
                        >
                            <FiEdit size={18} />
                        </button>
                    </div>
                ))}
            </div>

            {/* DRAWER */}
            <Drawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false)
                    setEditingColor(null)
                }}
                title={editingColor ? 'Editar color' : 'Crear color'}
            >
                <ColorCreatorPanel
                    editingColor={editingColor}
                    onSuccess={() => {
                        setDrawerOpen(false)
                        setEditingColor(null)
                        loadColors()
                    }}
                />
            </Drawer>
        </main>
    )
}