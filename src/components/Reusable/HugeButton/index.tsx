import { styled } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";
import style from "./style.module.css";

const MyButton = styled(Button)({
  color: "black !important",
  backgroundColor: "white !important",
  marginTop: 16,

  border: "1px solid var(--level2)",

  width: window.innerWidth > 500 ? 500 : 400,
  maxWidth: "90vw",

  height: window.innerWidth > 500 ? 80 : 60,

  fontSize: "1.2em",
});

type Props = {
  title: string;
  link: string;
};

const HugeButton = (props: Props) => {
  return (
    <MyButton variant="contained">
      <Link className={style.link} to={props.link}>
        {props.title}
      </Link>
    </MyButton>
  );
};

export default HugeButton;
