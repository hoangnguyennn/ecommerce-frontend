import React from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import { CartProvider } from "./contexts/cart.context";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={2000} />
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
