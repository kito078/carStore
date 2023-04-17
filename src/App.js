import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import CartProvider from "./cart-context";
import NewCart from "./components/ProductInfo/ProductInfo";
import Home from "./components/Home/Home";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Shop from "./components/Shop/Shop";
import TopNav from "./components/TopNav/TopNav";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <TopNav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      <Footer />
    </CartProvider>
  );
}

export default App;
