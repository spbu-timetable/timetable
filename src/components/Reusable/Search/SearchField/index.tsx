import { Icon, IconButton, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import qs from "query-string";
import useStyles from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { Clear, Search } from "@mui/icons-material";

interface Props {
    searchID: string;
    placeholder: string;
}

const SearchField: React.FC<Props> = ({ searchID, placeholder }: Props) => {
    const style = useStyles();

    const location = useLocation();
    const history = useHistory();
    let search = qs.parse(location.search);
    const ref: React.RefObject<HTMLInputElement> = React.createRef()

    const handleChange = () => {
        if (search) {
            if (ref.current?.value === "") delete search[searchID];
            else search = Object.assign(search, { [searchID]: ref.current?.value })
        }

        history.replace({
            pathname: location.pathname,
            search: qs.stringify(search)
        })
    }

    const handleClear = () => {
        if (search) delete search[searchID];
        if (ref.current?.value) ref.current.value = ""

        history.replace({
            pathname: location.pathname,
            search: qs.stringify(search)
        })
    }

    const startAdornment = <IconButton><Search /></IconButton>;
    const endAdornment = <IconButton onClick={handleClear} ><Clear /></IconButton>;

    return (
        <Paper variant="outlined" >
            <Stack>
                <TextField
                    autoFocus
                    className={style.search}
                    inputRef={ref || ""}
                    value={search.searchID}
                    onChange={handleChange}
                    placeholder={placeholder}
                    type="search"
                    InputProps={{
                        startAdornment: startAdornment,
                        endAdornment: endAdornment,
                    }}
                />
            </Stack>
        </Paper>
    )
}

export default SearchField;