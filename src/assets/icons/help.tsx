import SvgIcon from "@material-ui/core/SvgIcon";
import React from "react";

const Help = (props: any) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9">
        <path
          d="M2.25 9H3.75V7.5H2.25V9ZM3 0C1.3425 0 0 1.3425 0 3H1.5C1.5 2.175 2.175 1.5 3 1.5C3.825 1.5 4.5 2.175 4.5 3C4.5 4.5 2.25 4.3125 2.25 6.75H3.75C3.75 5.0625 6 4.875 6 3C6 1.3425 4.6575 0 3 0Z"
          fill={props.fill ? props.fill : "black"}
        />
      </svg>
    </SvgIcon>
  );
};

export default Help;
