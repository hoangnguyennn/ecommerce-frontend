import React from "react";
import { OrderSummaryStyled } from "./styles";
import OrderItem from "./OrderItem";

import { toVND } from "../../../helpers/formatter";
import { cartAmount, cartTotal } from "../../../helpers/calculator";

const OrderSummary = ({ list }) => {
  return (
    <OrderSummaryStyled>
      <div className="header">Đơn hàng ({cartAmount(list)} sản phẩm)</div>
      <div className="body">
        {list.map((product, index) => (
          <OrderItem key={index} product={product} />
        ))}
      </div>
      <div className="footer">
        <div className="total">
          Thành tiền: <span>{toVND(cartTotal(list))}</span>
        </div>
      </div>
    </OrderSummaryStyled>
  );
};

export default OrderSummary;
