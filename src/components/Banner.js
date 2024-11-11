import React from 'react';
import { banners } from '../data/banners';

const Banner = () => (
    <div className="relative h-[600px] bg-gray-900">  {/* 높이를 600px로 설정 */}
        <div className="absolute inset-0">
            <img src={banners[0].image} alt="Banner" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-5xl font-bold text-white mb-4">{banners[0].title}</h2>  {/* 폰트 사이즈도 약간 증가 */}
            <p className="text-2xl text-gray-200 mb-8">{banners[0].description}</p>    {/* 설명 글자 크기도 증가 */}
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">자세히 보기</button>  {/* 버튼 크기 증가 */}
        </div>
    </div>
);

export default Banner;