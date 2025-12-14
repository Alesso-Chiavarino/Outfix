'use client'

import { useEffect, useState } from 'react'
import { ProductsService } from '@/services/products.service'
import { Product } from '@/models/IProduct'

export const useSearch = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!query || query.length < 2) {
            setResults([])
            return
        }

        const timeout = setTimeout(async () => {
            setLoading(true)
            try {
                const res = await ProductsService.searchProducts(query)
                setResults(res)
            } finally {
                setLoading(false)
            }
        }, 400) // debounce

        return () => clearTimeout(timeout)
    }, [query])

    return {
        query,
        setQuery,
        results,
        loading
    }
}