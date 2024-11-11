import React from 'react';
import { Menu, Search, Heart, User, ShoppingCart } from '../icons/Icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <Menu className="h-6 w-6 mr-4 cursor-pointer text-gray-700" />
                    <span className="text-xl font-bold">
                        <a href="/">Dafarm Shop</a>
                    </span>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            className="w-80 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-gray-50"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    <Heart className="h-6 w-6 text-gray-700 cursor-pointer" />
                    <User className="h-6 w-6 text-gray-700 cursor-pointer" />

                    {/* Link the ShoppingCart icon to the Cart page */}
                    <Link to="/cart">
                        <ShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;