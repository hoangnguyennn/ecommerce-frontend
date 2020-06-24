import React from "react";
import { ProductSummaryStyled } from "./styles";
import Button from "../../Button";

import { toVND } from "../../../helpers/formatter";
import { discount, saving } from "../../../helpers/calculator";

const ProductSummary = ({ product }) => {
  const {
    image,
    name,
    price,
    originalPrice,
    screenSize,
    screenType,
    resolution,
    os,
    backCamera,
    frontCamera,
    cpu,
    ram,
    rom,
    sim,
    pin,
    status,
    highlightFeature
  } = product;

  return (
    <ProductSummaryStyled>
      <div className="picture">
        <img src={image ? `/images/${image}` : ""} alt="" />
      </div>
      <div className="content">
        <h2 className="title">{name}</h2>
        <div className="price-wrapper">
          {status === "Selling" ? (
            <>
              <p className="price">{toVND(price)}</p>
              {discount(price, originalPrice) && (
                <>
                  <p className="saving">
                    Tiết kiệm: <span>{discount(price, originalPrice)}%</span> (
                    {toVND(saving(price, originalPrice))})
                  </p>
                  <p className="original">
                    Giá thị trường: {toVND(originalPrice)}
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <p className="price">NGỪNG KINH DOANH</p>
            </>
          )}
        </div>
        <div className="feature-wrapper">
          <ul>
            {screenType && <li>Màn hình: {screenType}</li>}
            {screenSize && <li>Kích thước màn hình: {screenSize}</li>}
            {resolution && <li>Độ phân giải: {resolution}</li>}
            {os && <li>Hệ điều hành: {os}</li>}
            {frontCamera && <li>Camera trước: {frontCamera}</li>}
            {backCamera && <li>Camera sau: {backCamera}</li>}
            {cpu && <li>CPU: {cpu}</li>}
            {ram && <li>RAM: {ram}</li>}
            {rom && <li>Bộ nhớ: {rom}</li>}
            {sim && <li>Thẻ SIM: {sim}</li>}
            {pin && <li>Dung lượng pin: {pin}</li>}
            {highlightFeature && <li>Tính năng nổi bật: {highlightFeature}</li>}
          </ul>
        </div>
        <div className="action-wrapper">
          {status === "Selling" && (
            <Button color="danger" shadow>
              Chọn mua
            </Button>
          )}
        </div>
      </div>
    </ProductSummaryStyled>
  );
};

export default ProductSummary;
