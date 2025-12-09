'use client'

import { FileUploader } from '@/components/FileUploader'
import { Categories } from '@/models/ICategory'
import { ProductsService } from '@/services/products.service'
import { useStore } from '@/store/store'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'sonner'

export default function ProductsPage() {

    const {
        editProduct,
        setEditProduct,
        isLoading,
        setIsLoading,
        user,
        products,
        setProducts
    } = useStore(state => ({
        editProduct: state.editProduct,
        setEditProduct: state.setEditProduct,
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading,
        user: state.user,
        products: state.products,
        setProducts: state.setProducts
    }))

    useEffect(() => {
        const loadProducts = async () => {
            const products = await ProductsService.getProducts()
            setProducts(products)
        }
        loadProducts()
    }, [])

    const onSubmit = async (e: any) => {
        e.preventDefault()
        let isSuccess = false
        toast.loading('Creando producto...', {
            id: 'create-product-toast',
        })

        setIsLoading(true)

        try {
            const formData = new FormData()

            formData.append('Title', editProduct.Title)
            formData.append('Category', editProduct.Category)
            formData.append('Description', editProduct.Description)
            formData.append('Stock', editProduct.Stock.toString())
            formData.append('Price', editProduct.Price.toString())
            formData.append('Owner', user.email)

            for (let i = 0; i < editProduct.UploadImages.length; i++) {
                formData.append(editProduct.UploadImages[i].name, editProduct.UploadImages[i])
            }

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()
            if (data.status === 201) {
                isSuccess = true
            }
        }
        catch (error: any) {
            isSuccess = false
            console.error('Error creating product', error)
        }
        finally {
            setIsLoading(false)
            if (isSuccess) {
                toast.success('Producto creado correctamente', {
                    id: 'create-product-toast',
                })
            } else {
                toast.error('Error creando producto', {
                    id: 'create-product-toast',
                })
            }
        }
    }

    const onChange = (e: any) => {
        const { name, value } = e.target
        setEditProduct({ ...editProduct, [name]: value })
    }

    useEffect(() => {
        setEditProduct(editProduct)
    }, [editProduct])

    return (
        <main className='flex min-h-screen flex-col items-center gap-20 w-[80%]'>
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
                                <option value="">Selecciona una categoria</option>
                                {Categories.map((category, index) => {
                                    return <option key={index} value={category}>{category}</option>
                                })}
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
                            type="submit" disabled={isLoading}>

                            {'Crear producto'}
                        </button>
                    </div>

                    <div className='w-[50%]'>
                        <div className='overflow-hidden'>
                            <FileUploader />
                        </div>
                    </div>

                </form>
            </section>

            <section className="w-full p-10">
                <h2 className="text-xl font-semibold mb-6">Productos existentes</h2>

                {products.length === 0 ? (
                    <p>No hay productos cargados.</p>
                ) : (
                    <div className="grid grid-cols-4 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="border p-3 rounded-xl shadow-md hover:shadow-lg transition">

                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />

                                <h3 className="font-semibold mt-3">{product.title}</h3>
                                <p className="text-gray-600">{product.category}</p>
                                <p className="font-bold mt-1">$ {product.price}</p>

                                <Link
                                    href={`/${product.category}/${product.title}--${product.id}`}
                                    className="text-blue-500 text-sm mt-2 inline-block"
                                >
                                    Ver producto →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

            </section>
        </main>
    )
}
