import React from "react";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

type Props = {
  className?: string;
};

const LangSwitcher = (props: Props) => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <ToggleButtonGroup
        className={props.className}
        value={alignment}
        exclusive
        onChange={handleAlignment}
      >
        <ToggleButton value="left" aria-label="left aligned">
          En
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Ru
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LangSwitcher;
