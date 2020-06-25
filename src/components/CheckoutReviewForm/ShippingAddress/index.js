import React from "react";
import { ShippingAddressStyled } from "./styles";

const ShippingAddress = ({ delivery, style }) => {
  return (
    <ShippingAddressStyled style={style}>
      <div className="header">Địa chỉ giao hàng</div>
      <div className="body">
        <span className="fullName">{delivery.deliveryFullName}</span>
        <span className="address">{delivery.deliveryAddress}</span>
        <span className="phone">Điện thoại: {delivery.deliveryPhone}</span>
      </div>
    </ShippingAddressStyled>
  );
};

export default ShippingAddress;
