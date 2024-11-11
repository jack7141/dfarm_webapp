import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // 예시 소셜 미디어 아이콘 라이브러리

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Logo 및 설명 */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Dafarm Shop</h2>
                    <p className="text-gray-400">
                        고품질 인테리어 제품을 제공합니다. 고객님께 최고의 가치를 전해드리기 위해 노력하고 있습니다.
                    </p>
                </div>

                {/* 주요 링크 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* 소셜 미디어 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* 저작권 정보 */}
            <div className="text-center mt-8 text-gray-500">
                © {new Date().getFullYear()} Interior Shop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;