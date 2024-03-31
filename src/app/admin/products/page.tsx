'use client'

import { FileUploader } from '@/components/FileUploader'
import { useStore } from '@/store/store'
import React, { useEffect } from 'react'

export default function ProductsPage() {

    const { editProduct, setEditProduct } = useStore(state => {
        return {
            editProduct: state.editProduct,
            setEditProduct: state.setEditProduct
        }
    })

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append('Title', editProduct.Title)
        formData.append('Category', editProduct.Category)
        formData.append('Description', editProduct.Description)
        formData.append('Stock', editProduct.Stock.toString())
        formData.append('Price', editProduct.Price.toString())
        formData.append('Image', editProduct.Files[0])

        // TODO ADD MORE IMAGES
        // for (let i = 0; i < editProduct.Files.length; i++) {
        //     formData.append(editProduct.Files[i].name, editProduct.Files[i])
        // }

        // console.log("formData", formData)
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
        console.log("data", data)

    }

    const onChange = (e: any) => {
        const { name, value } = e.target
        setEditProduct({ ...editProduct, [name]: value })
    }

    useEffect(() => {
        setEditProduct(editProduct)
    }, [editProduct])

    // console.log("editProduct", editProduct)

    return (
        <main className='flex min-h-screen flex-col items-center gap-20 w-full'>
            <section className='w-full p-10'>
                <h1 className='text-2xl mb-6 font-semibold'>Crea un nuevo producto</h1>
                <form className='flex gap-10 w-full' onSubmit={onSubmit}>

                    <div className='w-[50%] flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm' htmlFor="Title">Nombre</label>
                            <input type="text" name="Title" id="Title" onChange={onChange} />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm' htmlFor="Category">Categoria</label>
                            <select name="Category" id="Category" onChange={onChange}>
                                <option value="Tshirts">Select a category</option>
                                <option value="Tshirts">Remeras</option>
                                <option value="Jackets">Camperas</option>
                                <option value="Pants">Pantalones</option>
                                <option value="Shoes">Zapatos </option>
                                <option value="Accessories">Accesorios</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-sm' htmlFor="Description">Descripción</label>
                            <input type="text" name="Description" id="Description" onChange={onChange} />
                        </div>

                        <div className='flex gap-5 items-center w-full'>
                            <div className='flex flex-col gap-1 w-[50%]'>
                                <label className='text-sm' htmlFor="Stock">Cantidad</label>
                                <input type="number" name="Stock" id="Stock" onChange={onChange} />
                            </div>
                            <div className='flex flex-col gap-1 w-[50%]'>
                                <label className='text-sm' htmlFor="Price">Precio</label>
                                <input type="number" name="Price" id="Price" onChange={onChange} />
                            </div>
                        </div>
                        <button
                            className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                            type="submit">
                            {'Crear producto'}
                        </button>
                    </div>

                    <div className='w-[50%]'>
                        <div className='overflow-hidden'>
                            <FileUploader />
                            {/* <input type="file" name="files" id="files" /> */}
                            {/* <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeFFlQA91xLIysJd5iJKmpCftWciwI2KTQGzMkCF5VmtJqjZZKrd2J3-2MIe7yqBTa9c&usqp=CAU" alt="cloudinary" /> */}
                        </div>
                    </div>

                </form>
            </section>
        </main>
    )
}
