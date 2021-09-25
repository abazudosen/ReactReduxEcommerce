import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {setProducts} from '../redux/actions/productAction'
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Err", error);
      });
      dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  console.log('Products', products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
