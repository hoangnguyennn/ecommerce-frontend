import React from "react";

import { CheckoutHeaderStyled } from "./styles";
import Container from "../Container";
import Logo from "../Header/Logo";
import Progress from "./Progress";

const CheckoutHeader = ({ current }) => {
  return (
    <CheckoutHeaderStyled>
      <Container>
        <Logo />
        <Progress current={current} />
      </Container>
    </CheckoutHeaderStyled>
  );
};

export default CheckoutHeader;
