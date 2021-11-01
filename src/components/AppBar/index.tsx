import { CalendarToday, Menu as MenuIcon } from "@mui/icons-material";
import { Divider, IconButton, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";

const AppBar: React.FC = () => {

    const { loading } = useAppSelector(state => state.app)

    return <Paper elevation={0}>
        <Stack height={56}>
            <Stack direction="row" height={52} mr={2} ml={2} alignItems="center">
                <IconButton sx={{ mr: 4 }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Расписание СПбГУ
                </Typography>
                <IconButton aria-label="set week">
                    <CalendarToday />
                </IconButton>
            </Stack>
            {loading ? <LinearProgress color="secondary" /> : <Divider />}
        </Stack>
    </Paper>
}

export default AppBar;