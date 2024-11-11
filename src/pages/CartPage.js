import React, { useState } from 'react';

const CartPage = () => {
    const [mainItemQty, setMainItemQty] = useState(1);
    const [extraItemQty, setExtraItemQty] = useState(1);

    const productPrice = 31000;
    const extraPrice = 1500;
    const shippingFee = 3000;
    const discount = 32200;
    const totalAmount = productPrice * mainItemQty + extraPrice * extraItemQty + shippingFee - discount;

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
            <div className="flex w-full max-w-5xl space-x-4 px-4">
                {/* Shopping Cart Section */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <div>
                            <input type="checkbox" id="selectAll" className="mr-2" />
                            <label htmlFor="selectAll" className="font-semibold">모두선택</label>
                        </div>
                        <button className="text-blue-500 font-semibold">선택삭제</button>
                    </div>

                    {/* Product Info */}
                    <div className="text-blue-500 font-semibold mb-4">쿠폰 적용된 가격은 결제할 때 확인 가능</div>
                    <div className="text-sm text-gray-500 mb-6">도도한 주식회사 배송</div>

                    {/* Main Item */}
                    <div className="flex items-start mb-4">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/table.png`} // Replace with actual main item image
                            alt="Product"
                            className="w-20 h-20 mr-4 rounded-lg"
                        />
                        <div>
                            <div className="text-sm text-blue-500">오늘출발 마감 | 11/12 (화) 발송 예정</div>
                            <div className="font-semibold mt-1">[올루미] 코니 아일랜드 장스탠드 조명 3단 조립형</div>
                            <div className="text-sm text-gray-500">70,000원 이상 무료배송 | 일반택배</div>
                            <div className="flex items-center mt-4">
                                <button onClick={() => setMainItemQty(mainItemQty > 1 ? mainItemQty - 1 : 1)} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l">-</button>
                                <span className="px-4 py-1 bg-gray-100 border-t border-b">{mainItemQty}</span>
                                <button onClick={() => setMainItemQty(mainItemQty + 1)} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r">+</button>
                                <span className="ml-4 font-semibold">{(productPrice * mainItemQty).toLocaleString()}원</span>
                            </div>
                        </div>
                    </div>

                    {/* Extra Item */}
                    <div className="flex items-center mb-4">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/table.png`} // Replace with actual extra item image
                            alt="Extra Product"
                            className="w-20 h-20 mr-4 rounded-lg"
                        />
                        <div className="flex-1">
                            <span className="block text-gray-700">추가상품 - LED 벌브 전구색(노란빛)</span>
                            <div className="flex items-center mt-2">
                                <button onClick={() => setExtraItemQty(extraItemQty > 1 ? extraItemQty - 1 : 1)} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l">-</button>
                                <span className="px-4 py-1 bg-gray-100 border-t border-b">{extraItemQty}</span>
                                <button onClick={() => setExtraItemQty(extraItemQty + 1)} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r">+</button>
                                <span className="ml-4 font-semibold">{(extraPrice * extraItemQty).toLocaleString()}원</span>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Info */}
                    <div className="text-sm text-gray-500 mt-4">
                        배송비 {shippingFee.toLocaleString()}원 <br />
                        묶음배송 상품 37,500원 추가 시 무료배송
                    </div>
                </div>

                {/* Payment Summary Section */}
                <div className="w-80 bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-lg font-semibold mb-4">결제금액</div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-700">총 상품금액</span>
                        <span>{((productPrice * mainItemQty) + (extraPrice * extraItemQty)).toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-700">총 배송비</span>
                        <span>+ {shippingFee.toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-700">총 할인금액</span>
                        <span className="text-red-500">- {discount.toLocaleString()}원</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t pt-4 mt-4">
                        <span>결제금액</span>
                        <span className="text-blue-500">{totalAmount.toLocaleString()}원</span>
                    </div>
                    <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold">
                        {mainItemQty + extraItemQty}개 상품 구매하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
