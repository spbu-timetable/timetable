import { List, Paper, Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import addressesApi from "../../services/addresses";
import CabinetsItem from "./CabinetsList";
import qs from 'query-string';
import SelectedCabinets from "./SelectedCabinets";
import { appSlice } from "../../store/reducers/app";
import { useAppDispatch } from "../../store/hooks";
import CabinetsList from "./CabinetsList/CabinetsList";
import SearchField from "../Reusable/SearchField";

const Cabinets: React.FC = () => {

    const { addressID } = qs.parse(window.location.search)

    const { data = [], isLoading, isError } = addressesApi.useGetCabinetsQuery(addressID as string)
    const { setLoading } = appSlice.actions;
    const dispatch = useAppDispatch();

    React.useMemo(() => dispatch(setLoading(false)), [isLoading]);

    return (
        <Stack spacing={1}>
            <SearchField searchID="cabinetsSearch" placeholder="Поиск кабинетов..." />

            <SelectedCabinets />

            <CabinetsList />
        </Stack>
    )
}

export default Cabinets