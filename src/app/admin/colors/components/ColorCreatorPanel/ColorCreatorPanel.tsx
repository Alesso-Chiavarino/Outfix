'use client'

import { useEffect, useState } from 'react'
import { IColor } from '@/models/IColor'
import { ColorsService } from '@/services/colors.service'
import { toast } from 'sonner'

type Props = {
    editingColor: IColor | null
    onSuccess: () => void
}

const emptyForm = {
    name: '',
    slug: '',
    code: '#000000'
}

export const ColorCreatorPanel = ({
    editingColor,
    onSuccess
}: Props) => {
    const [form, setForm] = useState(emptyForm)
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)

    /* 🔄 LOAD / RESET */
    useEffect(() => {
        if (editingColor) {
            setForm({
                name: editingColor.name,
                slug: editingColor.slug,
                code: editingColor.code
            })
        } else {
            setForm(emptyForm)
        }
    }, [editingColor])

    /* 💾 CREATE / UPDATE */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.name.trim() || !form.slug.trim()) {
            toast.error('Nombre y slug son obligatorios')
            return
        }

        setSaving(true)

        try {
            if (editingColor) {
                await ColorsService.updateColor(editingColor.id, form)
                toast.success('Color actualizado')
            } else {
                await ColorsService.createColor(form)
                toast.success('Color creado')
            }

            setForm(emptyForm)
            onSuccess()
        } catch {
            toast.error('Error al guardar el color')
        } finally {
            setSaving(false)
        }
    }

    /* 🗑 DELETE */
    const handleDelete = () => {
        if (!editingColor || deleting || saving) return

        toast('¿Eliminar color?', {
            description: 'Esta acción no se puede deshacer.',
            action: {
                label: 'Eliminar',
                onClick: async () => {
                    toast.loading('Eliminando color...', {
                        id: 'color-delete-toast',
                    })
                    setDeleting(true)

                    try {
                        await ColorsService.deleteColor(editingColor.id)

                        toast.success('Color eliminado', {
                            id: 'color-delete-toast',
                        })

                        setForm(emptyForm) // limpieza total
                        onSuccess()
                    } catch {
                        toast.error('Error eliminando el color', {
                            id: 'color-delete-toast',
                        })
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

            {/* NOMBRE */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Nombre</label>
                <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border rounded-lg px-3 py-2"
                    required
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
                />
            </div>

            {/* COLOR */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Color</label>

                <div className="flex items-center gap-4">
                    <input
                        type="color"
                        value={form.code}
                        onChange={e => setForm({ ...form, code: e.target.value })}
                        className="h-10 w-16 cursor-pointer border rounded"
                    />

                    <input
                        value={form.code}
                        onChange={e => setForm({ ...form, code: e.target.value })}
                        className="border rounded-lg px-3 py-2 w-32"
                    />

                    <div
                        className="w-10 h-10 rounded-full border"
                        style={{ backgroundColor: form.code }}
                        title={form.code}
                    />
                </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-3 pt-4">
                <button
                    type="submit"
                    disabled={saving || deleting}
                    className="
                        w-full bg-black text-white rounded-lg py-2
                        hover:bg-zinc-800 transition disabled:opacity-60
                    "
                >
                    {saving
                        ? 'Guardando…'
                        : editingColor
                            ? 'Actualizar color'
                            : 'Crear color'}
                </button>

                {editingColor && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={saving || deleting}
                        className="
                            w-full rounded-lg py-2 border text-red-600
                            hover:bg-red-50 transition disabled:opacity-60
                        "
                    >
                        {deleting ? 'Eliminando…' : 'Eliminar color'}
                    </button>
                )}
            </div>
        </form>
    )
}