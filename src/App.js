import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import InteriorShop from "./pages/InteriorShop";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Categories />
            <Routes>
                <Route path="/" element={<InteriorShop />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;