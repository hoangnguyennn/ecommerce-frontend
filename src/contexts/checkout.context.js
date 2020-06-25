import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { CartContext } from "./cart.context";
import { AuthContext } from "./auth.context";

export const CheckoutContext = React.createContext();
export const CheckoutProvider = ({ children }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  let initialDelivery = {
    deliveryFullName: "",
    deliveryAddress: "",
    deliveryPhone: ""
  };

  if (sessionStorage.getItem("delivery")) {
    initialDelivery = JSON.parse(sessionStorage.getItem("delivery"));
  } else if (Object.keys(user).length) {
    initialDelivery = {
      deliveryFullName: user.fullName,
      deliveryAddress: user.address,
      deliveryPhone: user.phone
    };
  }

  const [delivery, setDelivery] = useState(initialDelivery);

  useEffect(() => {
    sessionStorage.setItem("delivery", JSON.stringify(delivery));
  }, [delivery]);

  const updateDelivery = (newDelivery) => {
    setDelivery(newDelivery);
  };

  const order = () => {
    let data = { ...delivery, details: cart };
    axios
      .post("/api/orders", data)
      .then(() => {
        setCart([]);
        history.push("/customer/order");
        return toast.success("Đặt hàng thành công");
      })
      .catch((e) => {
        console.log(e.response);
        return toast.error(e.response.data.message || "Đặt hàng thất bại");
      });
  };

  const context = { delivery, updateDelivery, order };
  return (
    <CheckoutContext.Provider value={context}>
      {children}
    </CheckoutContext.Provider>
  );
};
