import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";
import Login from "../Login";

function App() {
  return (
    <div className={style.app}>
      {/* <Header />
      <Content /> */}
      <Login />
    </div>
  );
}

export default App;
