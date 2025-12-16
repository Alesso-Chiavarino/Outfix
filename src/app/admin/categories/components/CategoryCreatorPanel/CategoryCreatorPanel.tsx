'use client'

import { useEffect, useState } from 'react'
import { ICategory } from '@/models/ICategory'
import { CategoriesService } from '@/services/categories.service'
import { toast } from 'sonner'

type Props = {
    editingCategory: ICategory | null
    onSuccess: () => void
}

const emptyForm = {
    title: '',
    slug: '',
    description: '',
    banner: '',
}

export const CategoryCreatorPanel = ({ editingCategory, onSuccess }: Props) => {
    const [form, setForm] = useState(emptyForm)
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)

    // 🔄 Load / Reset
    useEffect(() => {
        if (editingCategory) {
            setForm({
                title: editingCategory.title ?? '',
                slug: editingCategory.slug ?? '',
                description: editingCategory.description ?? '',
                banner: editingCategory.banner ?? '',
            })
        } else {
            setForm(emptyForm)
        }
    }, [editingCategory])

    const resetAll = () => setForm(emptyForm)

    // 💾 Create / Update
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (saving || deleting) return

        setSaving(true)
        toast.loading('Guardando categoría...', { id: 'category-save-toast' })

        try {
            if (editingCategory) {
                await CategoriesService.updateCategory(editingCategory.id, form)
                toast.success('Categoría actualizada', { id: 'category-save-toast' })
            } else {
                await CategoriesService.createCategory(form)
                toast.success('Categoría creada', { id: 'category-save-toast' })
            }

            resetAll()
            onSuccess()
        } catch {
            toast.error('Error guardando la categoría', { id: 'category-save-toast' })
        } finally {
            setSaving(false)
        }
    }

    // 🗑 Delete (con Sonner)
    const handleDelete = () => {
        if (!editingCategory || deleting || saving) return
        toast('¿Eliminar categoría?', {
            description: 'Esta acción no se puede deshacer.',
            action: {
                label: 'Eliminar',
                onClick: async () => {
                    toast.loading('Eliminando categoría...', { id: 'category-delete-toast' })
                    setDeleting(true)

                    try {
                        await CategoriesService.deleteCategory(editingCategory.id)
                        toast.success('Categoría eliminada', { id: 'category-delete-toast' })

                        resetAll()
                        onSuccess()
                    } catch {
                        toast.error('Error eliminando la categoría', { id: 'category-delete-toast' })
                    } finally {
                        setDeleting(false)
                    }
                },
            },
            cancel: {
                label: 'Cancelar',
                onClick: () => toast.dismiss(),
            },
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* TÍTULO */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Título</label>
                <input
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    className="border rounded-lg px-3 py-2"
                    required
                    disabled={saving || deleting}
                />
            </div>

            {/* SLUG */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Slug</label>
                <input
                    value={form.slug}
                    onChange={e => setForm({ ...form, slug: e.target.value })}
                    className="border rounded-lg px-3 py-2"
                    required
                    disabled={saving || deleting}
                />
            </div>

            {/* DESCRIPCIÓN */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Descripción</label>
                <textarea
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    className="border rounded-lg px-3 py-2"
                    rows={3}
                    disabled={saving || deleting}
                />
            </div>

            {/* BANNER */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Banner (URL)</label>
                <input
                    value={form.banner}
                    onChange={e => setForm({ ...form, banner: e.target.value })}
                    className="border rounded-lg px-3 py-2"
                    disabled={saving || deleting}
                />
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 pt-2">
                <button
                    type="submit"
                    disabled={saving || deleting}
                    className="
            flex-1
            h-11
            bg-black text-white
            rounded-lg
            hover:bg-zinc-800
            transition
            disabled:opacity-60
        "
                >
                    {saving
                        ? 'Guardando…'
                        : editingCategory
                            ? 'Actualizar'
                            : 'Crear categoría'}
                </button>

                {editingCategory && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={saving || deleting}
                        className="
                h-11
                px-5
                rounded-lg
                border border-red-500
                text-red-600
                hover:bg-red-50
                transition
                disabled:opacity-60
            "
                    >
                        {deleting ? 'Eliminando…' : 'Eliminar'}
                    </button>
                )}
            </div>


        </form>
    )
}