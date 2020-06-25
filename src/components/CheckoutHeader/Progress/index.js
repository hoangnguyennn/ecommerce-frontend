import React from "react";

import { ProgressBarStyled } from "./styles";
import ProgressItem from "./Item";

const ProgressBar = ({ current }) => {
  return (
    <ProgressBarStyled>
      <ProgressItem title="Đăng nhập" step={1} active={current > 1} />
      <ProgressItem title="Địa chỉ giao hàng" step={2} active={current > 2} />
      <ProgressItem
        title="Xác nhận đặt hàng"
        step={3}
        active={current > 3}
        last
      />
    </ProgressBarStyled>
  );
};

export default ProgressBar;
