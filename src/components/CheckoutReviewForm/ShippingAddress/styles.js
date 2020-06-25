import styled from "styled-components";

const ShippingAddress = styled.div`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .body {
    padding-top: 10px;
    padding-bottom: 10px;

    span {
      display: block;
      line-height: 1.5;
    }

    .fullName {
      color: rgb(51, 51, 51);
      font-weight: 700;
    }
  }

  .footer {
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
`;

export { ShippingAddress as ShippingAddressStyled };
