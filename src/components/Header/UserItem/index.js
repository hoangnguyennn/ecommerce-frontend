import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserItemStyled } from "./styles";
import Button from "../../Button";
import { AuthContext } from "../../../contexts/auth.context";

const UserItem = () => {
  const { user, logout, setOpen } = useContext(AuthContext);
  return (
    <UserItemStyled>
      <div className="icon-box">
        <span className="material-icons">person</span>
      </div>
      <div className="title">
        {user.fullName ? `Chào ${user.fullName || user.id}` : "Đăng nhập"}
        <small>Tài khoản</small>
      </div>
      <div className="dropdown">
        {Object.keys(user).length ? (
          <>
            <Link to="/customer/order" className="dropdown-item">
              Đơn hàng của tui
            </Link>
            <Link to="/customer/account" className="dropdown-item">
              Tài khoản của tui
            </Link>
            <Button block color="primary" shadow onClick={logout}>
              Đăng xuất
            </Button>
          </>
        ) : (
          <Button block color="primary" shadow onClick={() => setOpen(true)}>
            Đăng nhập
          </Button>
        )}
      </div>
    </UserItemStyled>
  );
};

export default UserItem;
