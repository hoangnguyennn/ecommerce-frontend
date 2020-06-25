import React, { useState, useContext, useEffect } from "react";
import { LoginFormStyled } from "./styles";

import Button from "../Button";
import { AuthContext } from "../../contexts/auth.context";

const input = React.createRef();

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, setOpen } = useContext(AuthContext);

  useEffect(() => {
    input.current.focus();
  }, []);

  const validateAndLogin = (e) => {
    e.preventDefault();

    login(username, password);
  };

  return (
    <LoginFormStyled method="post">
      <div className="close" onClick={() => setOpen(false)}>
        <span className="material-icons">clear</span>
      </div>
      <h3 className="title">Đăng nhập</h3>
      <div className="form-group">
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={input}
        />
        <label>Tên tài khoản</label>
      </div>
      <div className="form-group">
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Mật khẩu</label>
      </div>
      <div className="form-group">
        <Button block color="primary" shadow onClick={validateAndLogin}>
          Đăng nhập
        </Button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
