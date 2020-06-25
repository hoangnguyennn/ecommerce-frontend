import React, { useContext } from "react";

import { HeaderStyled } from "./styles";
import Container from "../Container";
import Logo from "./Logo";
import FormSearch from "./FormSearch";
import UserItem from "./UserItem";
import UserItemCart from "./UserItem/Cart";
import LoginFormFloat from "../LoginForm/Float";
import { AuthContext } from "../../contexts/auth.context";

const Header = () => {
  const { isOpen } = useContext(AuthContext);
  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <FormSearch />
        <UserItem />
        <UserItemCart />
      </Container>
      {isOpen && <LoginFormFloat />}
    </HeaderStyled>
  );
};

export default Header;
