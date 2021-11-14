import { List, Paper } from "@mui/material";
import React from "react";
import TOption from "../../../../types/Option";
import Item from "./Item";

interface Props {
    options: TOption[];
    onClick?: Function;
}

const SearchList: React.FC<Props> = ({ options, onClick }) => {
    return (
        <Paper>
            <List>
                {
                    options.map((option) => <Item key={option.Oid} option={option} onClick={onClick} />)
                }
            </List>
        </Paper>
    )
}

export default SearchList;