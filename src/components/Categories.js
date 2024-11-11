import React from 'react';
import { categories } from '../data/categories';

const Categories = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">카테고리</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
                <div key={category.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                    <img src={category.image} alt={category.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-lg font-medium text-white">{category.name}</h3>
                        <p className="text-sm text-gray-200">{category.count.toLocaleString()}개 상품</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Categories;