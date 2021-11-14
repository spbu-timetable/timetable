import { Fade, List, Stack } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import addressesApi from "../../services/addresses";
import { useAppDispatch } from "../../store/hooks";
import { appSlice } from "../../store/reducers/app";
import TAddress from "../../types/Address";
import SearchField from "../Reusable/Search/SearchField";
import AddressItem from "./AddressItem";
import qs from "query-string"
import Background from "../Reusable/Background";
import TabPanel from "../Reusable/TabPanel";

const Addresses: React.FC = () => {

    const location = useLocation();
    const { addressSearch } = qs.parse(location.search);
    const { data = [], isLoading, isError } = addressesApi.useGetAddressesQuery(null);

    const { setLoading } = appSlice.actions;
    const dispatch = useAppDispatch();

    React.useMemo(() => dispatch(setLoading(false)), [isLoading]);

    if (data.length > 0) {
        let filtered: TAddress[] = [...data];
        if (typeof addressSearch === "string" && addressSearch !== "")
            filtered = data.filter((address) => address.DisplayName1.toLocaleLowerCase().search(addressSearch) !== -1)


        return (
            <TabPanel index={0}>
                <Fade in={data.length > 0}>
                    <Stack spacing={1} overflow="auto">
                        <SearchField searchID="addressSearch" placeholder="Поиск адресов..." />
                        <Background>
                            <List>
                                {filtered.map((address: TAddress) => <AddressItem key={address.Oid}  {...address} />)}
                            </List>
                        </Background>
                    </Stack>
                </Fade>
            </TabPanel>
        )
    }


    return <></>
}

export default Addresses;