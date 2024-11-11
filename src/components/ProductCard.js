import React from 'react';
import { Link } from 'react-router-dom';  // Link 임포트
import { Heart, Star } from '../icons/Icons';

const ProductCard = ({ product }) => (
    <Link to={`/product/${product.id}`} className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="relative group">
            <img
                src={product.images[0]}
                alt={product.name}
                className="w-full aspect-square object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
                src={product.images[1]}
                alt={product.name}
                className="w-full aspect-square object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <Heart className="h-5 w-5 text-gray-600" />
            </button>
            {product.isSpecial && (
                <span className="absolute top-4 left-4 bg-gray-900 text-white text-sm px-3 py-1 rounded-full">
                    Only
                </span>
            )}
        </div>
        <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{product.brand}</span>
                <div className="flex gap-1">
                    {product.badges.map((badge, index) => (
                        <span
                            key={index}
                            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
            <h3 className="font-medium mb-2 line-clamp-2 min-h-[48px]">
                {product.name}
            </h3>
            <div className="space-y-2">
                <div className="flex items-center">
                    <span className="text-blue-500 font-bold text-lg">
                        {product.discount}%
                    </span>
                    <span className="font-bold text-lg ml-2">
                        {product.price.toLocaleString()}원
                    </span>
                    <span className="text-gray-400 line-through text-sm ml-2">
                        {product.originalPrice.toLocaleString()}원
                    </span>
                </div>
                <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-400 text-sm">
                        리뷰 {product.reviews.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

export default ProductCard;