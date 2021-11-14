import { useTheme } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const Head: React.FC = () => {
    const theme = useTheme();

    return (
        <Helmet>
            <meta name="theme-color" content={theme.palette.background.default} />
        </Helmet>
    )
}

export default Head;