'use client'

import { FileUploader } from '@/components/FileUploader'
import { useProducts } from '../../hooks/useProducts'
import { ProductVariants } from './ProductVariants/ProductVariants'
import { useEffect, useState } from 'react'
import { ImagesSlider } from '@/components/ImagesSlider'

export const ProductCreatorPanel = ({ onSuccess, editingProduct }: any) => {

    const {
        categories,
        targets,
        onChange,
        onSubmit,
        editProduct,
        setEditProduct,
        isLoading,
        // variants,
        // setVariant,
        addVariant, colorsDb, sizes, variant, setVariant, variants, removeVariant,
        resetForm,
        deleteProduct
    } = useProducts(onSuccess, editingProduct)

    useEffect(() => {
        if (editingProduct) {
            setEditProduct({
                ...editingProduct,
                UploadImages: [],
                Images: editingProduct.images,
                Title: editingProduct.title,
                Category: editingProduct.category,
                Description: editingProduct.description,
                Price: editingProduct.price,
                Target: editingProduct.target,
                Draft: editingProduct.draft
            })

            setVariant(editingProduct.variants || [])
        } else {
            resetForm()
            setFileResetKey(k => k + 1) //
        }
    }, [editingProduct])

    const [fileResetKey, setFileResetKey] = useState(0)

    const removeExistingImage = (url: string) => {
        setEditProduct({
            ...editProduct,
            Images: editProduct.Images.filter((img: string) => img !== url)
        });
    };

    return (
        <main className="flex flex-col gap-10 w-full">

            <section className="w-full p-8 bg-white rounded-xl shadow-md flex flex-col gap-10">

                <form className="flex flex-col gap-10" onSubmit={onSubmit}>

                    <div className="grid grid-cols-2 gap-10">

                        <div className="flex flex-col gap-6">

                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Nombre</label>
                                <input
                                    type="text"
                                    name="Title"
                                    value={editProduct?.Title}
                                    onChange={onChange}
                                    className="border p-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Categoría</label>
                                <select
                                    name="Category"
                                    value={editProduct?.Category}
                                    onChange={onChange}
                                    className="border p-2 rounded-md"
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categories.map((cat: any) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Target</label>
                                <select
                                    name="Target"
                                    value={editProduct?.Target}
                                    onChange={onChange}
                                    className="border p-2 rounded-md"
                                >
                                    <option value="">Selecciona el público</option>
                                    {targets.map(t => (
                                        <option key={t.value} value={t.value}>
                                            {t.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Precio</label>
                                <input
                                    type="number"
                                    name="Price"
                                    value={editProduct?.Price}
                                    onChange={onChange}
                                    className="border p-2 rounded-md"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">Guardar como borrador</label>

                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={editProduct?.Draft ? "true" : "false"}
                                    onClick={() => setEditProduct({ ...editProduct, Draft: !editProduct?.Draft })}
                                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${editProduct?.Draft ? "bg-black" : "bg-gray-300"}`}
                                >
                                    <span
                                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${editProduct?.Draft ? "translate-x-6" : "translate-x-1"}`}
                                    />
                                </button>
                            </div>

                        </div>

                        <div className="flex flex-col gap-6">

                            {editProduct?.Images?.length > 0 && (
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium">Imágenes actuales</label>

                                    <div className="grid grid-cols-4 gap-3">
                                        {editProduct.Images.map((img: string, idx: number) => (
                                            <div key={idx} className="relative group">
                                                <img
                                                    src={img}
                                                    className="w-full h-24 object-cover rounded-md border"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setEditProduct({
                                                            ...editProduct,
                                                            Images: editProduct.Images.filter((_: any, i: number) => i !== idx)
                                                        })
                                                    }
                                                    className="
                            absolute top-1 right-1 
                            bg-black/70 text-white text-xs 
                            rounded-full px-2 py-0.5 
                            opacity-0 group-hover:opacity-100
                            transition
                        "
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <FileUploader resetKey={fileResetKey} />

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium">Descripción</label>
                                <textarea
                                    name="Description"
                                    rows={6}
                                    value={editProduct?.Description}
                                    onChange={onChange}
                                    className="border p-3 rounded-md resize-none"
                                    placeholder="Escribe aquí la descripción del producto…"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <ProductVariants
                            variant={variant}
                            setVariant={setVariant}
                            variants={variants}
                            addVariant={addVariant}
                            removeVariant={removeVariant}
                            colorsDb={colorsDb}
                            sizes={sizes}
                        />
                    </div>

                    <div className='mt-2 border-t pt-10'></div>

                    <button
                        className="bg-black hover:bg-zinc-700 text-white font-bold py-3 rounded-full w-full"
                        type="submit"
                        disabled={isLoading}
                    >
                        {editingProduct ? "Actualizar producto" : "Crear producto"}
                    </button>
                    {editingProduct && (
                        <div className="pt-6 border-t flex justify-center">
                            <button
                                type="button"
                                onClick={deleteProduct}
                                disabled={isLoading}
                                className="
                text-sm font-medium text-red-600
                hover:text-red-800
                transition
            "
                            >
                                Eliminar producto
                            </button>
                        </div>
                    )}

                </form>
            </section>
        </main>
    )
}