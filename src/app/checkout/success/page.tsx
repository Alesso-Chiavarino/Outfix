import React from 'react'

export default function SuccessPage() {
    return (
        <main className="min-h-[93vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-semibold">¡Pago exitoso!</h1>
                <p className="text-gray-600 text-sm">
                    Gracias por tu compra. Tu pedido está siendo procesado.
                </p>
            </div>
        </main>
    )
}