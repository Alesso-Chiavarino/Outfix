'use client'

import { useEffect, useState } from 'react'
import { CartService } from '@/services/carts.service'
import { toast } from 'sonner'
import { CheckoutsService } from '@/services/checkouts.service'

export default function CheckoutPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const startCheckout = async () => {
            try {
                toast.loading('Redirigiendo a Mercado Pago...', {
                    id: 'checkout-toast',
                })

                const res = await CheckoutsService.createCheckout()
                window.location.href = res.initPoint
            } catch (err) {
                toast.error('Error iniciando el pago', {
                    id: 'checkout-toast',
                })
                console.error(err)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }

        startCheckout()
    }, [])

    return (
        <main className="min-h-[93vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-black border-t-transparent" />
                {loading && <p className="text-gray-600 text-sm">
                    Preparando tu pago…
                </p>}
            </div>
        </main>
    )
}