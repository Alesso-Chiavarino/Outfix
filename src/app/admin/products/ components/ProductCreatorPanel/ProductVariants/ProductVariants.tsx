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

    console.log("DATOS", variant,variants)

    return (
        <div className='mt-10 border-t pt-10'>
            <h2 className="text-xl font-semibold mb-4">Variantes del producto</h2>

            <div className="flex flex-wrap gap-5 items-end">

                <div className='flex flex-col'>
                    <label className='text-sm'>Talle</label>
                    <select
                        value={variant.size}
                        onChange={(e) => setVariant({ ...variant, size: e.target.value })}
                        className="border p-2 rounded-md w-40"
                    >
                        <option value="">Talle</option>
                        {sizes.map((s: any) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-sm'>Color</label>
                    <select
                        value={variant.color}
                        onChange={(e) => setVariant({ ...variant, color: e.target.value })}
                        className="border p-2 rounded-md w-40"
                    >
                        <option value="">Color</option>
                        {colorsDb.map((c: any) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label className='text-sm'>Stock</label>
                    <input
                        type="number"
                        value={variant.stock}
                        onChange={(e) => setVariant({ ...variant, stock: Number(e.target.value) })}
                        className="border p-2 rounded-md w-28"
                    />
                </div>

                <button
                    type="button"
                    className="bg-black text-white px-5 py-2 rounded-full w-[60%] mx-auto"
                    onClick={addVariant}
                >
                    Agregar
                </button>
            </div>

            {variants.length > 0 && (
                <table className="w-full mt-6 border text-sm rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">Talle</th>
                            <th className="p-3">Color</th>
                            <th className="p-3">Stock</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {variants.map((v: any, i: number) => (
                            <tr key={i} className="border-t">
                                <td className="p-3">{v.size}</td>
                                <td className="p-3">{v.color}</td>
                                <td className="p-3">{v.stock}</td>
                                <td className="p-3">
                                    <button
                                        type="button"
                                        onClick={() => removeVariant(i)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}