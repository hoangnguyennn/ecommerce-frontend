import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SectionTitle } from "../components/Section";
import CheckoutReviewForm from "../components/CheckoutReviewForm";

import { CartContext } from "../contexts/cart.context";

const Review = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsPromise = cart.map((item) =>
        axios
          .get(`/api/products/${item.productId}`)
          .then((res) => res.data)
          .then((res) => res.data)
      );

      let products = await Promise.all(productsPromise);
      products = products
        .map((product, index) => ({
          ...product,
          amount: cart[index].amount
        }))
        .filter((item) => item.status === "Selling");

      if (products.length !== cart.length) {
        setCart(
          products.map((product) => ({ ...product, productId: product.id }))
        );
      }
      setCartInfo(products);
    }

    fetchData();
  }, [cart, setCart]);

  return (
    <div>
      <SectionTitle>Xác nhận đặt hàng</SectionTitle>
      <CheckoutReviewForm cartInfo={cartInfo} />
    </div>
  );
};

export default Review;
