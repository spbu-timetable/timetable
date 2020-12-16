import React from "react";
import { Redirect } from "react-router-dom";
import User from "../../../types/User";
import style from "./style.module.css";

type Props = {
  user?: User;
};

const Bookmarks = (props: Props) => {
  return <div>{props.user ? <>Bookmarks</> : <Redirect to="login" />}</div>;
};

export default Bookmarks;
