"use client";

import { useState, useEffect } from "react";
import { Drawer } from "@/components/Drawer";
import { ProductCreatorPanel } from "./ components/ProductCreatorPanel/ProductCreatorPanel";
import { ProductsService } from "@/services/products.service";
import { Product } from "@/models/IProduct";
import Link from "next/link";
import { useStore } from "@/store/store"; // para usar el usuario de zustand
import { useProducts } from "./hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const { user, categories, colors } = useStore();
    const { resetForm } = useProducts();

    useEffect(() => {
        const load = async () => {
            const res = await ProductsService.getUserProducts(user.email);
            setProducts(res);
        };
        if (user.email) load();
    }, [user]);

    const openCreate = () => {
        setEditingProduct(null);
        setDrawerOpen(true);
    };

    const openEdit = (product: Product) => {
        setEditingProduct(product);
        setDrawerOpen(true);
    };

    const refresh = async () => {
        const res = await ProductsService.getUserProducts(user.email);
        setProducts(res);
    };

    return (
        <main className="w-full flex flex-col items-center py-10 gap-20 h-full">

            {/* HEADER */}
            <div className="w-[90%] max-w-6xl flex justify-between items-center mb-10">
                <h1 className="text-3xl font-semibold tracking-tight">Mis Productos</h1>

                <button
                    onClick={openCreate}
                    className="bg-black text-white rounded-full px-6 py-2.5 font-medium 
                               hover:bg-zinc-800 transition-all"
                >
                    + Crear producto
                </button>
            </div>

            {/* LISTADO */}
            <div className="w-[90%] max-w-6xl">
                {products.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 text-lg">
                        No tenés productos cargados todavía.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => {

                            const category = categories.find(cat => cat.id === product.category);

                            return (
                                <ProductCard product={product} openEdit={openEdit} key={product.id} />
                            )
                        })}
                    </div>
                )}
            </div>

            {/* DRAWER */}
            <Drawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false)
                    setEditingProduct(null)
                    resetForm();
                }}
                title={editingProduct ? "Editar producto" : "Crear nuevo producto"}
            >
                <ProductCreatorPanel
                    editingProduct={editingProduct}
                    onSuccess={() => {
                        setEditingProduct(null);
                        setDrawerOpen(false);
                        refresh();
                    }}
                />
            </Drawer>
        </main>
    );
}