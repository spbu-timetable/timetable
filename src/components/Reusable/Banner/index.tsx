import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React from "react";
import style from "./style.module.css";

type Props = {
  mainText?: string;
  secondaryText?: string;
  className?: string;
};

const Banner = (props: Props) => {
  return (
    <div className={style.wrapper}>
      <Typography variant="h4" color="textPrimary">
        {props.mainText}
      </Typography>
      <Typography color="textSecondary">{props.secondaryText}</Typography>
    </div>
  );
};

export default Banner;
