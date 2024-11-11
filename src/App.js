import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import InteriorShop from "./pages/InteriorShop";
import ProductDetail from "./pages/ProductDetail";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
function App() {
    const location = useLocation(); // Get the current route

    return (
        <>
            <Navbar />
            {/* Only show Banner and Categories on routes other than /cart */}
            {location.pathname !== "/cart" && (
                <>
                    <Banner />
                    <Categories />
                </>
            )}
            <Routes>
                <Route path="/" element={<InteriorShop />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} /> {/* Cart page route */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;