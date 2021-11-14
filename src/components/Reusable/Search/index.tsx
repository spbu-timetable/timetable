import { Stack } from "@mui/material";
import React from "react";
import TOption from "../../../types/Option";
import SearchField from "./SearchField";
import SearchList from "./SearchList";

interface Props {
    options: TOption[];
    onClick?: Function;
    multipleSelection?: boolean;
}

const Search: React.FC<Props> = ({ options, onClick, multipleSelection }: Props) => {
    return (
        <Stack>
            <SearchField searchID={"search"} placeholder={"Поиск"} />
            <SearchList options={options} onClick={onClick} />
        </Stack>
    )
}

export default Search