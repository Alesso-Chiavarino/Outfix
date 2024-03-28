import Link from 'next/link'
import React from 'react'

export const CollectionLink = ({ link }: { link: string }) => {
  return (
    <Link href={link} className='px-2 py-1 border-[1px] border-gray-50/80 hover:border-white w-fit'>Ir a la colección</Link>
  )
}
