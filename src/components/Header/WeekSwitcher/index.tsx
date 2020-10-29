import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import React from "react";

type Props = {
  className?: string;

  setNextWeek: () => void;
  setPrevWeek: () => void;
};

const WeekSwitcher = (props: Props) => {
  return (
    <div className={props.className}>
      <IconButton onClick={() => props.setPrevWeek()}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={() => props.setNextWeek()}>
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
};

export default WeekSwitcher;
