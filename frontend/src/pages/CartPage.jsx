import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
