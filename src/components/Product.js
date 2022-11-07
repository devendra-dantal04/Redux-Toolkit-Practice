import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import {product} from "../data/products";
import {fetchProducts} from "../store/productSlice";
import {STATUSES} from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product)
  // const [products, setProducts] = useState(product);

  useEffect(() => {
    // const fetchProducts = async () => {
    //     // const response = await fetch("https://fakestoreapi.com/products/");
    //     // const data = await response.json();
    //     // setProducts(data);
    //     console.log(products);
    // }

    // fetchProducts();

    dispatch(fetchProducts())

  }, []);


  const handleAdd = (item) => {
    dispatch(add(item))
  }

  if(status === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }

  if(status === STATUSES.ERROR) {
    return <h2>Something went wrong !</h2>
  }


  return <div className="productsWrapper">{
    products.map(product => (
        <div className="card" key={product.id}>
                <img src={product.image} alt="img" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className="btn" onClick={() => handleAdd(product)}>Add To Cart</button>
        </div>
    ))
    }</div>;
};

export default Product;
