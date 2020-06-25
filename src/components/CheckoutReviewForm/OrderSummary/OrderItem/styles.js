import styled from "styled-components";

const OrderItem = styled.div`
  display: flex;
  padding: 6px 0;

  .info {
    flex: 1;
    padding-right: 20px;

    b {
      padding-right: 10px;
    }

    a {
      color: #69b3fe;
      text-decoration: none;
    }
  }

  .price {
    min-width: 100px;
    text-align: right;
  }
`;

export { OrderItem as OrderItemStyled };
