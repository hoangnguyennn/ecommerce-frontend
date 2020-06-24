import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSummary from "../components/Product/Summary";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => res.data)
      .then((res) => setProduct(res.data));
  }, [id]);

  return <ProductSummary product={product} />;
};

export default SingleProduct;
