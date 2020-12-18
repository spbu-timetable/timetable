import React from "react";
import style from "./style.module.css";

import { Route, Switch } from "react-router-dom";

import Content from "../Content";
import Register from "../Register/container";
import Login from "../Login/container";
import Footer from "../Footer";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import AlertT from "../../types/Alert";

type Props = {
  isAlert: boolean;
  alert: AlertT;

  cleanAlert: () => void;
};

const App = (props: Props) => {
  React.useEffect(() => {
    if (props.isAlert) {
      const timeout = setTimeout(() => {
        props.cleanAlert();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [props, props.isAlert]);

  return (
    <div className={style.app}>
      <Collapse in={props.isAlert}>
        <div className={style.alert_wrapper}>
          <Alert className={style.alert} severity={props.alert.severity}>
            {props.alert.title ? <AlertTitle>{props.alert.title}</AlertTitle> : <></>}
            {props.alert.message}
          </Alert>
        </div>
      </Collapse>

      <Switch>
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/" render={() => <Content />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
