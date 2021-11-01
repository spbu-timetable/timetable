import { Paper, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./style";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    title: string;
    link: string
}

const Section: React.FC<Props> = ({ title, link }: Props) => {
    const style = useStyles();

    const history = useHistory();

    const handleClick = () => history.push(link);

    return <Paper className={style.wrapper} variant="outlined" component="section" onClick={handleClick}>
        <Typography variant="h5" component="div">
            {title}
        </Typography>
    </Paper>
}

export default Section