import { ArrowBack, Menu } from "@mui/icons-material"
import { Box, Grow, IconButton } from "@mui/material"
import React from "react"
import { useHistory, useLocation } from "react-router-dom"

const BackButton: React.FC = () => {

    const location = useLocation();
    const history = useHistory();
    const isHomePage = location.pathname === "/"

    const handleClick = () => history.goBack();



    return (
        <IconButton onClick={handleClick} sx={{ mr: 4, }} aria-label="menu">
            <Menu />
        </IconButton>
    )
}

export default BackButton