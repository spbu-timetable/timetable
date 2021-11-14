import { Stack } from "@mui/material";
import React from "react";
import AppBar from '../AppBar';
import Addresses from "../Addresses";
import Sections from "../Sections";
import Stepper from "../Stepper";

const Content: React.FC = () => {
    return (
        <Stack spacing={1} overflow={"auto"}>
            <Stack>
                <AppBar />
                <Sections />
            </Stack>

            <Addresses />

            <Stepper />
        </Stack>
    )
}

export default Content;