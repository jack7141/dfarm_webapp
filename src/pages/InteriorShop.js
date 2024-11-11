import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';


const InteriorShop = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="pt-16">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">베스트 상품</h2>
                        <select className="border border-gray-200 p-2 rounded-md bg-white">
                            <option>인기순</option>
                            <option>최신순</option>
                            <option>낮은가격순</option>
                            <option>높은가격순</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteriorShop;