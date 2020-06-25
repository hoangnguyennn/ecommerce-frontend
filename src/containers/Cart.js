import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SectionTitle } from "../components/Section";

import CartWrapper from "../components/Cart/Wrapper";
import CartEmpty from "../components/Cart/Empty";
import { cartAmount } from "../helpers/calculator";
import { CartContext } from "../contexts/cart.context";

const Cart = () => {
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
      <SectionTitle>
        Giỏ hàng <span>({cartAmount(cartInfo)} sản phẩm)</span>
      </SectionTitle>
      {cartAmount(cartInfo) ? (
        <CartWrapper cartInfo={cartInfo} />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
