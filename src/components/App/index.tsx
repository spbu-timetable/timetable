import React from "react";
import style from "./style.module.css";

import { Route, Switch } from "react-router-dom";

import Content from "../Content";
import Register from "../Register/container";
import Login from "../Login/container";
import Footer from "../Footer";

function App() {
  return (
    <div className={style.app}>
      <Switch>
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/" render={() => <Content />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
