import React from "react";
import { Link } from "react-router-dom";
import { OrderItemStyled } from "./styles";

import { toVND } from "../../../../helpers/formatter";

const OrderItem = ({ product }) => {
  const { amount, id, name, price } = product;
  return (
    <OrderItemStyled>
      <div className="info">
        <b>{amount}x</b>
        <Link to={`/products/${id}`}>{name}</Link>
      </div>
      <div className="price">{toVND(price)}</div>
    </OrderItemStyled>
  );
};

export default OrderItem;
