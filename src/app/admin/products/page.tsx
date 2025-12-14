"use client";

import { useState, useEffect } from "react";
import { Drawer } from "@/components/Drawer";
import { ProductCreatorPanel } from "./ components/ProductCreatorPanel/ProductCreatorPanel";
import { ProductsService } from "@/services/products.service";
import { Product } from "@/models/IProduct";
import { useStore } from "@/store/store";
import { useProducts } from "./hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";

const PAGE_SIZE = 20;

export default function ProductsPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const { user, categories } = useStore();
    const { resetForm } = useProducts();

    const loadProducts = async (pageToLoad = page, categoryId?: string | null) => {
        if (!user.email) return;

        const res = await ProductsService.getUserProducts(
            user.email,
            pageToLoad,
            PAGE_SIZE,
            categoryId ?? undefined
        );

        setProducts(res.products);
        setHasMore(res.products?.length === PAGE_SIZE);
    };

    useEffect(() => {
        loadProducts(1, selectedCategory);
        setPage(1);
    }, [user.email, selectedCategory]);

    const openCreate = () => {
        setEditingProduct(null);
        setDrawerOpen(true);
    };

    const openEdit = (product: Product) => {
        setEditingProduct(product);
        setDrawerOpen(true);
    };

    const refresh = async () => {
        await loadProducts(page);
    };

    return (
        <main className="w-full flex flex-col items-center py-10 gap-16 h-full">

            {/* HEADER */}
            <div className="w-[90%] max-w-6xl flex justify-between items-center">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Mis Productos
                </h1>

                <button
                    onClick={openCreate}
                    className="bg-black text-white rounded-full px-6 py-2.5 font-medium hover:bg-zinc-800 transition"
                >
                    + Crear producto
                </button>
            </div>

            {/* FILTERS */}
            <div className="w-[90%] max-w-6xl flex gap-3 flex-wrap">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`
            px-4 py-1.5 rounded-full text-sm border transition
            ${!selectedCategory
                            ? "bg-black text-white border-black"
                            : "border-gray-300 text-gray-600 hover:border-black"}
        `}
                >
                    Todas
                </button>

                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`
                px-4 py-1.5 rounded-full text-sm border transition
                ${selectedCategory === cat.id
                                ? "bg-black text-white border-black"
                                : "border-gray-300 text-gray-600 hover:border-black"}
            `}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className="w-[90%] max-w-6xl">
                {products?.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 text-lg">
                        No tenés productos cargados todavía.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map(product => {
                            const category = categories.find(
                                c => c.id === product.category
                            );

                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    openEdit={openEdit}
                                    category={category}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* PAGINATION */}
            {products?.length > 0 && (
                <div className="flex gap-4 items-center">
                    <button
                        disabled={page === 1}
                        onClick={() => {
                            const newPage = page - 1;
                            setPage(newPage);
                            loadProducts(newPage);
                        }}
                        className="px-4 py-2 border rounded-md disabled:opacity-40"
                    >
                        ← Anterior
                    </button>

                    <span className="text-sm text-gray-600">
                        Página {page}
                    </span>

                    <button
                        disabled={!hasMore}
                        onClick={() => {
                            const newPage = page + 1;
                            setPage(newPage);
                            loadProducts(newPage);
                        }}
                        className="px-4 py-2 border rounded-md disabled:opacity-40"
                    >
                        Siguiente →
                    </button>
                </div>
            )}

            {/* DRAWER */}
            <Drawer
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                    setEditingProduct(null);
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