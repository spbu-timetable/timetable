import React from "react";
import qs from "query-string"
import addressesApi from "../../services/addresses";
import { Chip, Stack } from "@mui/material";

const SelectedCabinets: React.FC = () => {

    let { cabinets = [], addressID } = qs.parse(window.location.search);
    let { data = [] } = addressesApi.useGetCabinetsQuery(addressID as string);

    if (cabinets) {
        if (typeof cabinets === "string") data = data.filter((c) => c.Oid === cabinets);
        else data = data.filter((c) => {
            console.log(cabinets?.includes(c.Oid))
            return cabinets?.includes(c.Oid)
        });
    }

    console.log(cabinets)

    if (cabinets) return <Stack spacing={1} direction="row">{data.map((cabinet) => <Chip key={cabinet.Oid} label={cabinet.DisplayName1} onDelete={() => {

    }} />)}</Stack>

    return <></>
}

export default SelectedCabinets;