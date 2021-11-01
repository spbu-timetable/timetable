import { Stack } from "@mui/material";
import React from "react";
import AppBar from "../AppBar";
import Routes from "./Routes";
import Sections from "./Sections";
import useStyles from "./style";

const Content: React.FC = () => {
    const style = useStyles();

    return <Stack className={style.app}>
        <AppBar />
        <Stack m={2}>
            <Routes />
        </Stack>
    </Stack>
}

export default Content;