import React from "react";
import { Route, Switch } from "react-router-dom";
import Addresses from "./Addresses/container";
import Cabinets from "./Cabinets/container";
import Groups from "./Groups";
import Main from "./Main";
import style from "./style.module.css";
import Teachers from "./Teachers";
import Timetable from "./Timetable";

const Content = () => {
  return (
    <div className={style.content}>
      <Switch>
        <Route path="/addresses/cabinets/timetable" component={() => <Timetable />} />
        <Route path="/addresses/cabinets" component={() => <Cabinets />} />
        <Route path="/teachers" component={() => <Teachers />} />
        <Route path="/addresses" component={() => <Addresses />} />
        <Route path="/groups" component={() => <Groups />} />
        <Route path="/" component={() => <Main />} />
      </Switch>
    </div>
  );
};

export default Content;
