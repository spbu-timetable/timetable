import React from "react";
import qs from "query-string"
import addressesApi from "../../../services/addresses";
import { Collapse, Fade, Grow, Stack } from "@mui/material";
import CabinetChip from "./CabinetChip";

const SelectedCabinets: React.FC = () => {

    let { cabinets = [], addressID } = qs.parse(window.location.search);
    let { data = [] } = addressesApi.useGetCabinetsQuery(addressID as string);

    if (cabinets) {
        if (typeof cabinets === "string") data = data.filter((c) => c.Oid === cabinets);
        else data = data.filter((c) => cabinets?.includes(c.Oid));
    }

    if (data.length > 0)
        return (
            <Collapse in={data.length > 0}>
                <Stack spacing={1} direction="row">
                    {data.map((cabinet) => <CabinetChip key={cabinet.Oid} {...cabinet} />)}
                </Stack>
            </Collapse>
        )

    return <></>
}

export default SelectedCabinets;