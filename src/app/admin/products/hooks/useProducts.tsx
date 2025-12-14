import { ProductsService } from '@/services/products.service'
import { CategoriesService } from '@/services/categories.service'
import { ColorsService } from '@/services/colors.service'
import { useStore } from '@/store/store'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Product } from '@/models/IProduct'
import { ICategory } from '@/models/ICategory'

export const useProducts = (onSuccess?: () => void, editingProduct?: Product) => {

    const {
        editProduct,
        setEditProduct,
        isLoading,
        setIsLoading,
        user,
        setProducts,
        resetEditProduct
    } = useStore(state => ({
        editProduct: state.editProduct,
        setEditProduct: state.setEditProduct,
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading,
        user: state.user,
        products: state.products,
        setProducts: state.setProducts,
        resetEditProduct: state.resetEditProduct
    }))

    const [categories, setCategories] = useState<ICategory[]>([])
    const [colorsDb, setColorsDb] = useState([])

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const targets = [
        { value: "men", label: "Hombre" },
        { value: "women", label: "Mujer" },
        { value: "child", label: "Niño" },
        { value: "girl", label: "Niña" },
        { value: "unisex", label: "Unisex" },
    ]

    const [variant, setVariant] = useState({
        size: "",
        color: "",
        stock: 0
    })

    const [variants, setVariants] = useState<any[]>([])

    useEffect(() => {
        const load = async () => {
            setProducts(await ProductsService.getProducts())
            setCategories(await CategoriesService.getCategories())
            setColorsDb(await ColorsService.getColors())
        }
        load()
    }, [])

    useEffect(() => {
        if (!editingProduct) return;

        setEditProduct({
            ...editProduct,
            Title: editingProduct.title,
            Category: editingProduct.category,
            Description: editingProduct.description,
            Price: editingProduct.price,
            Target: editingProduct.target,
            Draft: editingProduct.draft,
            UploadImages: [],
            Images: editingProduct.images || [] // EXISTING IMAGES
        });

        setVariants(editingProduct.variants || []);
    }, [editingProduct]);

    const addVariant = () => {
        if (!variant.size || !variant.color || variant.stock <= 0) return;

        const alreadyExists = variants.some(
            v => v.size === variant.size && v.color === variant.color
        );

        if (alreadyExists) {
            toast.error("Ya existe una variante con ese talle y color");
            return;
        }

        setVariants([...variants, variant]);
        setVariant({ size: "", color: "", stock: 0 });
    };

    const removeVariant = (i: number) => {
        setVariants(variants.filter((_, idx) => idx !== i))
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        let isSuccess = false
        const isUpdating = Boolean(editingProduct);

        toast.loading('Creando producto...', { id: 'create-product-toast' })
        setIsLoading(true)

        try {
            const formData = new FormData()

            formData.append('Title', editProduct.Title)
            formData.append('Category', editProduct.Category)
            formData.append('Description', editProduct.Description)
            formData.append('Price', editProduct.Price.toString())
            formData.append('Owner', user.email)
            formData.append('Target', editProduct.Target)
            formData.append("Variants", JSON.stringify(variants))
            formData.append('Draft', editProduct.Draft ? 'true' : 'false')
            formData.append(
                'ExistingImages',
                JSON.stringify(editProduct.Images || [])
            );

            for (let i = 0; i < editProduct.UploadImages.length; i++) {
                formData.append(editProduct.UploadImages[i].name, editProduct.UploadImages[i])
            }

            if (isUpdating) {
                formData.append('ProductId', editingProduct!.id)
            }

            console.log("isUpdating", isUpdating)

            if (isUpdating) {

                const response = await fetch('/api/products/' + editingProduct!.id, {
                    method: 'PUT',
                    body: formData
                })

                await response.json()
                isSuccess = response.ok

            } else {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                })

                await response.json()
                isSuccess = response.ok
            }

        }
        catch {
            isSuccess = false
        }
        finally {
            setIsLoading(false)
            if (isSuccess) {
                resetEditProduct();
                onSuccess && onSuccess()
                toast.success('Producto creado correctamente', { id: 'create-product-toast' })
            } else {
                toast.error('Error creando producto', { id: 'create-product-toast' })
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

    const resetVariants = () => {
        setVariants([]);
        setVariant({ size: "", color: "", stock: 0 });
    };

    const resetForm = () => {
        resetEditProduct();
        resetVariants();
    };

    return {
        editProduct,
        setEditProduct,
        isLoading,
        categories,
        colorsDb,
        sizes,
        targets,
        variant,
        setVariant,
        variants,
        addVariant,
        removeVariant,
        onSubmit,
        onChange,
        user,
        resetForm
    }
}
