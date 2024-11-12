import React, { useEffect, useState } from 'react';
import api from "../api/api";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Function to fetch categories
        const fetchCategories = async () => {
            try {
                const response = await api.get('/categories/');
                setCategories(response.data.data); // Set categories from API response
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6">카테고리</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <div key={category.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/flower.png`} // Placeholder image path
                            alt={category.name}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-lg font-medium text-white">{category.name}</h3>
                            <p className="text-sm text-gray-200">20개 상품</p> {/* Placeholder count */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;