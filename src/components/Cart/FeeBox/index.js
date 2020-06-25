import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FeeBoxStyled } from "./styles";

import { toVND } from "../../../helpers/formatter";
import { cartTotal } from "../../../helpers/calculator";
import Button from "../../Button";
import { AuthContext } from "../../../contexts/auth.context";

const FeeBox = ({ cart }) => {
  const { user, setOpen } = useContext(AuthContext);
  const history = useHistory();

  const checkout = () => {
    if (Object.keys(user).length) {
      history.push("/checkout/shipping");
    } else {
      setOpen(true);
    }
  };

  return (
    <FeeBoxStyled>
      <div className="header">Chi tiết</div>
      <div className="body">
        <p className="text">
          Tạm tính: <span>{toVND(cartTotal(cart))}</span>
        </p>
      </div>
      <div className="footer">
        <Button color="primary" block shadow onClick={checkout}>
          Tiến hành đặt mua
        </Button>
      </div>
    </FeeBoxStyled>
  );
};

export default FeeBox;
