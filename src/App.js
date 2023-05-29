import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import NewCart from "./components/ProductInfo/ProductInfo";
import Home from "./components/Home/Home";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Shop from "./components/Shop/Shop";
import TopNav from "./components/TopNav/TopNav";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ProductInfoForm from "./components/ProductInfo/ProductInfoForm";
import Blog from "./components/Blog/Blog";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onProductHandler = (product) => {
    setSelectedProduct(product);
  };
  const onSaveProductHandler = (product) => {
    setSelectedProduct(product);
  };

  console.log(selectedProduct);
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home onSaveProduct={onProductHandler} />} />
          <Route
            path="/productInfo"
            element={<ProductInfo product={selectedProduct} />}
          />
          <Route
            path="/shop"
            element={<Shop onSaveProduct={onProductHandler} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>

      <Footer />
    </CartProvider>
  );
}

export default App;
