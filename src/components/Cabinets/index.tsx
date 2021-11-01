import { List, Paper, Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import addressesApi from "../../services/addresses";
import CabinetsItem from "./CabinetsItem";
import qs from 'query-string';
import SelectedCabinets from "./SelectedCabinets";
import { appSlice } from "../../store/reducers/app";
import { useAppDispatch } from "../../store/hooks";

const Cabinets: React.FC = () => {

    const { addressID } = qs.parse(window.location.search)

    const { data = [], isLoading, isError } = addressesApi.useGetCabinetsQuery(addressID as string)
    const { setLoading } = appSlice.actions;
    const dispatch = useAppDispatch();

    if (isLoading) dispatch(setLoading(true));
    else dispatch(setLoading(false));

    return <Stack spacing={2}>
        <SelectedCabinets />

        <Paper>
            <List>
                {data.map((cabinet) => <CabinetsItem key={cabinet.Oid} {...cabinet} />)}
            </List>
        </Paper>
    </Stack>
}

export default Cabinets