import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AddressFormStyled } from "./styles";
import { FormGroup, FormLabel, FormInput, FormTextArea } from "../Form";
import Button from "../Button";

import { CheckoutContext } from "../../contexts/checkout.context";

const CheckoutAddressForm = () => {
  const { delivery, updateDelivery } = useContext(CheckoutContext);
  const [fullName, setFullName] = useState(delivery.deliveryFullName);
  const [address, setAddress] = useState(delivery.deliveryAddress);
  const [phone, setPhone] = useState(delivery.deliveryPhone);
  const history = useHistory();

  const validateAndSubmit = (e) => {
    e.preventDefault();

    updateDelivery({
      deliveryFullName: fullName,
      deliveryAddress: address,
      deliveryPhone: phone
    });
    history.push("/checkout/review");
  };

  return (
    <AddressFormStyled horizontal>
      <FormGroup>
        <FormLabel>Họ tên</FormLabel>
        <FormInput
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Số điện thoại</FormLabel>
        <FormInput
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Địa chỉ</FormLabel>
        <FormTextArea
          required
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        ></FormTextArea>
      </FormGroup>
      <FormGroup>
        <FormLabel></FormLabel>
        <Button color="primary" shadow onClick={validateAndSubmit}>
          Tiếp tục
        </Button>
      </FormGroup>
    </AddressFormStyled>
  );
};

export default CheckoutAddressForm;
