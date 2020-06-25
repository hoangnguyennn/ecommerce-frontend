import React, { useContext } from "react";
import { LoginFormFloatStyled } from "./styles";

import LoginForm from "..";
import { AuthContext } from "../../../contexts/auth.context";

const LoginFormFloat = () => {
  const { setOpen } = useContext(AuthContext);
  return (
    <LoginFormFloatStyled>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <LoginForm />
    </LoginFormFloatStyled>
  );
};

export default LoginFormFloat;
