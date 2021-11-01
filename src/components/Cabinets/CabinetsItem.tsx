import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import TCabinet from "../../types/Cabinet";
import qs from 'query-string';

const CabinetsItem: React.FC<TCabinet> = ({ DisplayName1, Oid }: TCabinet) => {

    const history = useHistory();

    const params = qs.parse(window.location.search);

    const handleClick = () => {
        if (params.cabinets) {
            if (typeof params.cabinets === "string") params.cabinets = [params.cabinets, Oid];
            else params.cabinets = [...params.cabinets, Oid];
        }
        else params.cabinets = [Oid];

        params.cabinets = Array.from(new Set(params.cabinets))

        history.push({
            pathname: "/addresses/cabinets",
            search: qs.stringify(params)
        })
    }

    return <ListItem onClick={handleClick} disabled={params.cabinets?.includes(Oid)} button>
        <ListItemText primary={DisplayName1} />
    </ListItem>
}

export default CabinetsItem;