import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../contexts/auth.context";

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const [isAuthenticated, authenticate] = useState(null);
  const { loginByToken } = useContext(AuthContext);

  useEffect(() => {
    loginByToken().then(authenticate);
  }, [loginByToken]);

  if (isAuthenticated === null) return null;
  return isAuthenticated ? (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  ) : (
    <>
      {toast.error("Phiên làm việc đã hết hạn")}
      <Redirect to="/" />
    </>
  );
};

export default PrivateRoute;
