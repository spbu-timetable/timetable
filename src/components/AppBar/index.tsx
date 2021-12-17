import { CalendarToday, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme, IconButton, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import NavButton from "./BackButton";

const AppBar: React.FC = () => {

    const { loading } = useAppSelector(state => state.app)
    const theme = useTheme();
    const height = 56, width = "100vw";


    return (
        <Stack height={height} >
            <Stack
                bgcolor={theme.palette.primary.main}
                height={height}
                width={width}
                position="fixed"
                justifyContent="center"
            >
                {loading ? <LinearProgress color="secondary" /> : null}
                <Stack direction="row" height={52} mr={2} ml={2} alignItems="center">
                    <NavButton />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Расписание СПбГУ
                    </Typography>
                    <IconButton aria-label="set week">
                        <CalendarToday />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default AppBar;