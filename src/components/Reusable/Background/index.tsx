import { Paper, useMediaQuery } from "@mui/material";
import React from "react";
import useStyles from "./style";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Background: React.FC<Props> = ({ children }: Props) => {
    const style = useStyles();
    const isMobile = useMediaQuery("(max-width: 425px)");

    return (
        <Paper className={style.background} elevation={0} variant={isMobile ? "elevation" : "outlined"} >
            {children}
        </Paper>
    )
}

export default Background;