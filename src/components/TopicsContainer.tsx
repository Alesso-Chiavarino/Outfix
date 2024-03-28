import Link from 'next/link'
import React from 'react'

export const TopicsContainer = () => {
    return (
        <ul className='flex items-center gap-10 font-medium'>
            <li>
                <Link href={`/men`}>Hombre</Link>
            </li>
            <li>
                <Link href={`/women`}>Mujer</Link>
            </li>
            <li>
                <Link href={`/kids`}>Niños</Link>
            </li>
        </ul>
    )
}
