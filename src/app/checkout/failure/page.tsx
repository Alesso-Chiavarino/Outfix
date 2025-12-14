import React from 'react'

export default function FailurePage() {
  return (
    <main className="min-h-[93vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold">El pago ha sido cancelado</h1>
            <p className="text-gray-600 text-sm">
                Tu pago no se ha completado. Puedes intentar nuevamente.
            </p>
        </div>
    </main>
  )
}
