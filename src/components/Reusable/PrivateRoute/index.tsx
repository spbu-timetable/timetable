import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import refreshTokenLocalStorage from "../../../localStorage/refreshToken";

type Props = {
  component: React.Component;
  url: string;
};

const PrivateRoute = (props: Props) => (
  <Route
    path={props.url}
    render={(props) => (refreshTokenLocalStorage.set() ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
