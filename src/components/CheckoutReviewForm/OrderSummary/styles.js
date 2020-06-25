import styled from "styled-components";

const OrderSummary = styled.div`
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
  }

  .footer {
    padding-top: 10px;
    border-top: 1px solid #ddd;

    .total {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;

      span {
        color: #fe696a;
        font-size: 24px;
      }
    }
  }
`;

export { OrderSummary as OrderSummaryStyled };
