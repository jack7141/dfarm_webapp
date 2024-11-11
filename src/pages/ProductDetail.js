import React, { useState } from 'react';
import { productDetails } from '../data/productDetailData';
import UserStylingShots from "../components/UserStylingShots";

const ProductDetail = () => {
    const product = productDetails;

    // State to keep track of the currently displayed image
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    if (!product) return <div>상품을 찾을 수 없습니다.</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Image Gallery */}
                <div className="flex lg:flex-row gap-4 items-start">
                    {/* Thumbnail List */}
                    <div className="flex flex-col gap-3">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                                    selectedImage === image ? 'border-gray-300' : 'border-transparent'
                                } hover:border-gray-300`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="w-[500px] h-[500px]">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Side - Product Information */}
                <div className="lg:w-1/2">
                    <h2 className="text-sm font-medium text-gray-500 mb-2">{product.brand}</h2>
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

                    {/* Rating and Reviews */}
                    <div className="flex items-center mb-4">
                        <span className="text-lg text-yellow-400 mr-2">★</span>
                        <span className="font-medium text-gray-700">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews.toLocaleString()} 리뷰)</span>
                    </div>

                    {/* Price and Discount */}
                    <div className="flex items-center mb-4">
                        <span className="text-3xl font-bold text-blue-600 mr-2">
                            {product.price.toLocaleString()}원
                        </span>
                        {product.discount > 0 && (
                            <>
                                <span className="text-gray-500 line-through mr-2">
                                    {product.originalPrice.toLocaleString()}원
                                </span>
                                <span className="text-red-500 font-medium">{product.discount}% 할인</span>
                            </>
                        )}
                    </div>

                    {/* Shipping Info */}
                    <div className="text-sm text-gray-700 mb-4 space-y-1">
                        {product.specialDelivery && (
                            <div className="text-purple-600 font-bold">오늘출발</div>
                        )}
                        <div>배송비: {product.shippingCost.toLocaleString()}원 (₩{product.freeShippingThreshold.toLocaleString()} 이상 구매 시 무료배송)</div>
                        <div className="text-gray-400">도서산간 지역 추가 비용 발생 가능</div>
                    </div>

                    {/* Expected Delivery Date */}
                    <div className="text-sm text-gray-700 mb-6">
                        <span className="text-gray-500">도착 예정일:</span>
                        <span className="text-blue-500 font-semibold ml-2">{product.estimatedDelivery}</span>
                    </div>

                    {/* Buttons - Add to Cart and Buy Now */}
                    <div className="flex gap-4 mb-4">
                        <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-bold">
                            장바구니에 추가
                        </button>
                        <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-bold">
                            바로 구매
                        </button>
                    </div>

                    {/* Additional Options */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-2">추가상품 (선택)</h3>
                        <select className="w-full border border-gray-400 rounded-lg p-3 bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="">
                            <option value="" disabled className="text-gray-500">
                                추가상품 (선택)
                            </option>
                            {product.options.map((option, index) => (
                                <option key={index}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <UserStylingShots />
        </div>
    );
};

export default ProductDetail;