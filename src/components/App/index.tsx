import React from "react";
import style from "./style.module.css";

import Content from "../Content";
import Header from "../Header/container";
import Login from "../Login";
import Footer from "../Footer";

function App() {
  return (
    <div className={style.app}>
      {/* <Header />
      <Content /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
