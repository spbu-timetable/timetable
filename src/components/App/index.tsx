import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import HeaderContainer from "../Header/container";

function App() {
  return (
    <div className={style.app}>
      <HeaderContainer />
      <Content />
    </div>
  );
}

export default App;
