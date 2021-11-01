import { List, Paper } from "@mui/material";
import React from "react";
import addressesApi from "../../services/addresses";
import TAddress from "../../types/Address";
import AddressItem from "./AddressItem";

const Addresses: React.FC = () => {

    const { data = [], isLoading, isError } = addressesApi.useGetAddressesQuery(null);

    return <Paper>
        <List>
            {data.map((address: TAddress) => <AddressItem key={address.Oid}  {...address} />)}
        </List>
    </Paper>
}

export default Addresses