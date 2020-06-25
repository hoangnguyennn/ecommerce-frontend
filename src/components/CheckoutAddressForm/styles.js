import styled from "styled-components";
import { Form, FormLabel } from "../Form";

const AddressForm = styled(Form)`
  width: 500px;
  margin: 20px auto 0;

  ${FormLabel} {
    min-width: 200px;
  }
`;

export { AddressForm as AddressFormStyled };
