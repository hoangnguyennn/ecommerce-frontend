import styled from "styled-components";
import { ContainerStyled } from "../Container/styles";

const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  ${ContainerStyled} {
    display: flex;
    align-items: center;
  }
`;

export { CheckoutHeader as CheckoutHeaderStyled };
