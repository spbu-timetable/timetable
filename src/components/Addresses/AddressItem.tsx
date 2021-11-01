import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import TAddress from "../../types/Address";
import qs from 'query-string';

const AddressItem: React.FC<TAddress> = ({ DisplayName1, Oid, matches }: TAddress) => {

    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: "/addresses/cabinets",
            search: qs.stringify({ addressID: Oid })
        })
    }

    return <ListItem onClick={handleClick} button>
        <ListItemText primary={DisplayName1} />
    </ListItem>
}

export default AddressItem;