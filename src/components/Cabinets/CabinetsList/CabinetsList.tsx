import { Paper, List, Fade, Stack } from "@mui/material";
import React from "react";
import addressesApi from "../../../services/addresses";
import { useAppDispatch } from "../../../store/hooks";
import { appSlice } from "../../../store/reducers/app";
import CabinetsItem from ".";
import qs from "query-string";
import { useLocation } from "react-router-dom";
import TCabinet from "../../../types/Cabinet";


const CabinetsList: React.FC = () => {

    const location = useLocation()
    const { addressID, cabinetsSearch } = qs.parse(location.search)

    const { data = [], isLoading, isError } = addressesApi.useGetCabinetsQuery(addressID as string)
    const { setLoading } = appSlice.actions;
    const dispatch = useAppDispatch();

    if (isLoading) dispatch(setLoading(true));
    else dispatch(setLoading(false));

    if (data.length > 0) {
        let filtered: TCabinet[] = [...data];
        if (typeof cabinetsSearch === "string" && cabinetsSearch !== "")
            filtered = data.filter((address) => address.DisplayName1.toLocaleLowerCase().search(cabinetsSearch) !== -1)

        return (
            <Fade in={data.length > 0}>
                <Stack spacing={1} >
                    <Paper>
                        <List>
                            {filtered.map((cabinet) => <CabinetsItem key={cabinet.Oid} {...cabinet} />)}
                        </List>
                    </Paper>
                </Stack>
            </Fade>
        )
    }

    return <></>
}

export default CabinetsList