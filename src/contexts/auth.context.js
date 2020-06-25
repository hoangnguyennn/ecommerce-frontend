import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { CartContext } from "./cart.context";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState(initialUser);
  const [isOpen, setOpen] = useState(false);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    axios
      .post("/api/auth/login", { username, password })
      .then((res) => res.data)
      .then((res) => {
        setUser(res.data);
        setOpen(false);
        return toast.success("Đăng nhập thành công");
      })
      .catch((e) => {
        console.log(e.response);
        return toast.error("Đăng nhập thất bại");
      });
  };

  const loginByToken = () => {
    return axios
      .post("/api/auth/me")
      .then(true, false)
      .catch((e) => {
        console.log(e.response);
        setUser({});
        return false;
      });
  };

  const logout = () => {
    setUser({});
    setCart([]);
    return axios.post("/api/auth/logout").then(true, false);
  };

  const context = { user, login, loginByToken, logout, isOpen, setOpen };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
