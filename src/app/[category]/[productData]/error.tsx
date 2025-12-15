'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="min-h-[94vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center flex flex-col gap-6">
                <h1 className="text-2xl font-semibold">
                    Ocurrió un error
                </h1>

                <p className="text-gray-600 text-sm">
                    No pudimos cargar este producto.
                    Puede haber sido eliminado o hubo un problema momentáneo.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="
                            px-6 py-2
                            rounded-full
                            bg-black text-white
                            hover:bg-zinc-800
                            transition
                        "
                    >
                        Reintentar
                    </button>

                    <Link
                        href="/"
                        className="
                            px-6 py-2
                            rounded-full
                            border
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </main>
    )
}