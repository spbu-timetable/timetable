import { ThemeProvider } from "@material-ui/core";
import React from "react";

const Theme = (props: IntrinsicElements) => {
	const { children } = props;
	return <ThemeProvider>{children}</ThemeProvider>;
};
