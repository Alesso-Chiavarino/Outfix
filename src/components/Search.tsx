import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export const Search = () => {
    return (
        <button className='flex items-center gap-1 border-gray-200 px-2 py-1 hover:border-gray-400 transition-all rounded-md border-[1px]'>
            <IoSearchOutline />
            <span>Buscar</span>
        </button>
    )
}
