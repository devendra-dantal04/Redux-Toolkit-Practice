import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const navStyle = {display:'flex', alignItems: 'center', justifyContent : 'space-between'};

const Navbar = () => {
  const items = useSelector((state) => state.cart.length)


  return <div style={navStyle}>
    <span>REDUX STORE</span>
    <div>
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
        <span className="cartCount">Cart Items : {items}</span>
    </div>
  </div>;
};

export default Navbar;
