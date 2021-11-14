import { ArrowBack, CalendarToday, Menu as MenuIcon, MoreVert } from "@mui/icons-material";
import { Divider, IconButton, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import NavButton from "./BackButton";

const AppBar: React.FC = () => {

    const { loading } = useAppSelector(state => state.app)

    return (
        <Paper elevation={0} sx={{ border: "none" }} square>
            <Stack height={56} justifyContent="center">
                {loading ? <LinearProgress color="secondary" /> : null}
                <Stack direction="row" height={52} mr={2} ml={2} alignItems="center">
                    <NavButton />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Расписание СПбГУ
                    </Typography>
                    <IconButton aria-label="set week">
                        <CalendarToday />
                    </IconButton>
                    <IconButton aria-label="set week">
                        <MoreVert />
                    </IconButton>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default AppBar;