'use client'

import Link from 'next/link'
import { IoSearchOutline, IoClose } from 'react-icons/io5'
import { useSearch } from '@/hooks/useSearch'

export const SearchPanel = ({ onClose }: { onClose: () => void }) => {
    const { query, setQuery, results, loading } = useSearch()

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={onClose}
            />

            {/* Panel */}
            <div className="
                fixed top-16 left-1/2 -translate-x-1/2 
                w-full max-w-2xl bg-white z-50 
                rounded-xl shadow-xl overflow-hidden
            ">
                {/* Input */}
                <div className="flex items-center gap-3 p-4 border-b">
                    <IoSearchOutline className="text-xl text-gray-400" />
                    <input
                        autoFocus
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Buscar productos…"
                        className="w-full outline-none text-lg"
                    />
                    <button onClick={onClose}>
                        <IoClose className="text-xl text-gray-400 hover:text-black" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[420px] overflow-y-auto">
                    {loading && (
                        <div className="p-6 text-gray-500">Buscando…</div>
                    )}

                    {!loading && results.length === 0 && query.length >= 2 && (
                        <div className="p-6 text-gray-500">
                            No se encontraron resultados
                        </div>
                    )}

                    {results.map(p => (
                        <Link
                            key={p.id}
                            href={`/${p.category}/${p.title}-outfix-${p.id}`}
                            onClick={onClose}
                            className="
                                flex items-center gap-4 p-4 
                                hover:bg-gray-50 transition
                            "
                        >
                            <img
                                src={p.images?.[0]}
                                className="w-14 h-14 object-cover rounded-md"
                            />

                            <div className="flex flex-col">
                                <span className="font-medium">{p.title}</span>
                                <span className="text-sm text-gray-500">
                                    ${p.price.toLocaleString('es-AR')}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}