import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import TCabinet from "../../../types/Cabinet";
import qs from 'query-string';

const CabinetsItem: React.FC<TCabinet> = ({ DisplayName1, Oid }: TCabinet) => {

    const history = useHistory();

    const search = qs.parse(window.location.search);

    const handleClick = () => {
        if (search.cabinets) {
            if (typeof search.cabinets === "string") search.cabinets = [search.cabinets, Oid];
            else search.cabinets = [...search.cabinets, Oid];
        }
        else search.cabinets = [Oid];

        search.cabinets = Array.from(new Set(search.cabinets))

        history.replace({
            pathname: "/addresses/cabinets",
            search: qs.stringify(search)
        })
    }

    return <ListItem onClick={handleClick} disabled={search.cabinets?.includes(Oid)} button>
        <ListItemText primary={DisplayName1} />
    </ListItem>
}

export default CabinetsItem;