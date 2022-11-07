import React from "react";
import Product from "../components/Product.js";


const Home = () => {
  return <div>
    <h2 className="heading">Welcome to Redux Toolkit Store</h2>
    <section>
        <h3>Products</h3>
        <Product />
    </section>
  </div>;
};

export default Home;
