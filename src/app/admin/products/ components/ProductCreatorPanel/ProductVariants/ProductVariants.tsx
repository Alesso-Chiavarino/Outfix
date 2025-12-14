'use client'

export const ProductVariants = ({
    variant,
    setVariant,
    variants,
    addVariant,
    removeVariant,
    colorsDb,
    sizes
}: any) => {

    const selectedColor = colorsDb.find((c: any) => c.id === variant.color)

    return (
        <div className="mt-10 border-t pt-10">
            <h2 className="text-xl font-semibold mb-6">
                Variantes del producto
            </h2>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* COLUMNA IZQUIERDA */}
                <div className="flex flex-col gap-5">

                    {/* TALLE */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Talle</label>
                        <select
                            value={variant.size}
                            onChange={(e) =>
                                setVariant({ ...variant, size: e.target.value })
                            }
                            className="border p-2 rounded-md w-40"
                        >
                            <option value="">Seleccionar</option>
                            {sizes.map((s: string) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* STOCK */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm">Stock</label>
                        <input
                            type="number"
                            min={0}
                            value={variant.stock}
                            onChange={(e) =>
                                setVariant({
                                    ...variant,
                                    stock: Number(e.target.value),
                                })
                            }
                            className="border p-2 rounded-md w-28"
                        />
                    </div>

                    {/* BOTÓN */}
                    <button
                        type="button"
                        onClick={addVariant}
                        className="
                            bg-black text-white
                            px-6 py-2 rounded-full
                            w-fit
                            hover:bg-zinc-800 transition
                        "
                    >
                        Agregar variante
                    </button>
                </div>

                {/* COLUMNA DERECHA – COLOR PICKER */}
                <div className="flex flex-col gap-3">

                    <label className="text-sm">Color</label>

                    <div className="grid grid-cols-6 gap-2">
                        {colorsDb.map((c: any) => {
                            const isSelected = variant.color === c.id

                            return (
                                <button
                                    key={c.id}
                                    type="button"
                                    onClick={() =>
                                        setVariant({ ...variant, color: c.id })
                                    }
                                    title={c.name}
                                    className={`
                                        w-8 h-8 rounded-full border
                                        transition
                                        ${isSelected
                                            ? 'ring-2 ring-black scale-110'
                                            : 'border-gray-300 hover:scale-105'}
                                    `}
                                    style={{ backgroundColor: c.code }}
                                />
                            )
                        })}
                    </div>

                    {selectedColor && (
                        <span className="text-xs text-gray-600">
                            Color seleccionado: <b>{selectedColor.name}</b>
                        </span>
                    )}
                </div>
            </div>

            {/* TABLA */}
            {variants.length > 0 && (
                <table className="w-full mt-10 text-sm border rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Talle</th>
                            <th className="p-3 text-left">Color</th>
                            <th className="p-3 text-left">Stock</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {variants.map((v: any, i: number) => {
                            const color = colorsDb.find(
                                (c: any) => c.id === v.color
                            )

                            return (
                                <tr key={i} className="border-t">
                                    <td className="p-3">{v.size}</td>

                                    <td className="p-3">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-4 h-4 rounded-full border"
                                                style={{
                                                    backgroundColor: color?.code,
                                                }}
                                            />
                                            <span>{color?.name || '—'}</span>
                                        </div>
                                    </td>

                                    <td className="p-3">{v.stock}</td>

                                    <td className="p-3 text-right">
                                        <button
                                            type="button"
                                            onClick={() => removeVariant(i)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}