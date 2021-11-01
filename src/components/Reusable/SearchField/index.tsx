import { TextField } from "@mui/material";
import React from "react";
import useStyles from "./style";

interface Props {
    value: string
}

const SearchField: React.FC<Props> = ({ value }: Props) => {
    const style = useStyles()

    return <TextField className={style.search} />
}

export default SearchField;