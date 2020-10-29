import React from "react";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
  className?: string;
  isRussian: boolean;

  setLang: (isRussian: boolean) => void;
};

const toggleStyles = makeStyles({
  disabled: {
    color: "aqua",
    border: "none",
    height: "36px",
    width: "36px",
    lineHeight: "18px",
    backgroundColor: "red",
  },
  root: {
    color: "red",
    border: "none",
    height: "36px",
    width: "36px",
    lineHeight: "18px",
    backgroundColor: "blue",
    "&$selected": {
      backgroundColor: "blue",
    },
  },
});

const LangSwitcher = (props: Props) => {
  const toggleClass = toggleStyles();
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      className={props.className}
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton
        // className={props.isRussian ? toggleClass.disabled : toggleClass.root}
        value="left"
        aria-label="left aligned"
        selected={!props.isRussian}
        onClick={() => props.setLang(false)}
      >
        En
      </ToggleButton>
      <ToggleButton
        // className={props.isRussian === true ? toggleClass.root : toggleClass.disabled}
        value="right"
        aria-label="right aligned"
        selected={props.isRussian}
        onClick={() => props.setLang(true)}
      >
        Ru
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LangSwitcher;
