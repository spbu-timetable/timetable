import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;