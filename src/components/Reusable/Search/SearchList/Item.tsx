import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import TOption from "../../../../types/Option";


interface Props {
    option: TOption;
    onClick?: Function;
}

const Item: React.FC<Props> = ({ option, onClick }: Props) => {


    const handleClick = () => {
        if (onClick) return onClick(option);
    }

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText primary={option.DisplayName1} />
        </ListItem>
    )
}

export default Item;