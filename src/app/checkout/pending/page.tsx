import React from 'react'

export default function PendingPage() {
    return (
        <main className="min-h-[93vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-semibold">Tu pago está pendiente</h1>
                <p className="text-gray-600 text-sm">
                    Estamos procesando tu pago. Te notificaremos una vez que se complete.
                </p>
            </div>
        </main>
    )
}
