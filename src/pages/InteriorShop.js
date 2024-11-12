import React, { useEffect, useState, useRef, useCallback } from 'react';
import ProductCard from '../components/ProductCard';
import api from "../api/api";
import Spinner from '../components/Spinner';


const InteriorShop = () => {
    const [products, setProducts] = useState([]); // All loaded products
    const [loading, setLoading] = useState(true); // Loading state
    const [page, setPage] = useState(1); // Current page
    const [hasMore, setHasMore] = useState(true); // If there are more pages to load

    const observer = useRef(); // Ref to hold the observer

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/products/?page=${page}&page_size=10`);
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...response.data.data,
                ]); // Append new products to the existing list
                setHasMore(response.data.links.next !== null); // Set hasMore to false if there's no next page
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]);

    // Set up the observer to detect when the last product is visible
    const lastProductRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect(); // Disconnect the previous observer

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1); // Load the next page
                }
            });

            if (node) observer.current.observe(node); // Observe the current node
        },
        [loading, hasMore]
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-6">베스트 상품</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => {
                            // Attach the lastProductRef to the last product
                            if (index === products.length - 1) {
                                return (
                                    <div ref={lastProductRef} key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                );
                            } else {
                                return (
                                    <ProductCard key={product.id} product={product} />
                                );
                            }
                        })}
                    </div>
                    {/* Spinner shown while loading */}
                    {loading && (
                        <div className="flex justify-center items-center mt-8">
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InteriorShop;