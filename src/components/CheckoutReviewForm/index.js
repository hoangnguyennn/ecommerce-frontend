import React, { useContext } from "react";
import { ReviewFormStyled } from "./styles";

import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import Button from "../Button";

import { CheckoutContext } from "../../contexts/checkout.context";

const CheckoutReviewForm = ({ cartInfo }) => {
  const { delivery, order } = useContext(CheckoutContext);
  return (
    <ReviewFormStyled>
      <ShippingAddress delivery={delivery} style={{ marginRight: "20px" }} />
      <OrderSummary list={cartInfo} />
      <div className="action-wrapper">
        <Button color="primary" shadow onClick={order}>
          Đặt hàng
        </Button>
      </div>
    </ReviewFormStyled>
  );
};

export default CheckoutReviewForm;
