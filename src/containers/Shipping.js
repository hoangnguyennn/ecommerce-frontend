import React from "react";
import { SectionTitle } from "../components/Section";
import CheckoutAddressForm from "../components/CheckoutAddressForm";

const Shipping = () => {
  return (
    <div>
      <SectionTitle>Địa chỉ giao hàng</SectionTitle>
      <CheckoutAddressForm />
    </div>
  );
};

export default Shipping;
