import styled from "styled-components";

const ProductSummary = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .picture {
    flex: 4;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .content {
    flex: 5;
    padding: 16px;
    border-left: 2px solid #ddd;

    .title {
      margin: 0 -16px;
      padding: 0 16px 16px;
      font-size: 24px;
      font-weight: 300;
      line-height: 30px;
      text-transform: capitalize;
      border-bottom: 1px solid #ddd;
    }

    .price-wrapper {
      padding: 16px 0;
      border-bottom: 1px solid #ddd;

      p:not(:last-child) {
        margin-bottom: 4px;
      }

      .price {
        color: #fe696a;
        font-size: 20px;
        font-weight: 500;
      }

      .saving {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;

        span {
          color: #fe696a;
        }
      }

      .original {
        font-size: 14px;
        font-weight: 300;
        line-height: 18px;
      }
    }

    .feature-wrapper {
      padding: 16px;
      font-size: 14px;
      border-bottom: 1px solid #ddd;

      ul {
        li:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }

    .action-wrapper {
      padding: 16px 0;
    }
  }
`;

export { ProductSummary as ProductSummaryStyled };
