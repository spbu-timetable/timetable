import { Chip } from "@mui/material";
import React from "react";
import TCabinet from "../../../types/Cabinet";
import qs from "query-string";
import { useHistory } from "react-router-dom";

const CabinetChip: React.FC<TCabinet> = ({ Oid, DisplayName1 }: TCabinet) => {

    const history = useHistory();

    const handleDelete = () => {
        let search = qs.parse(window.location.search);

        if (search.cabinets) {
            if (typeof search.cabinets === "string") delete search.cabinets;
            else search.cabinets = search.cabinets?.filter((cabinet: string) => cabinet !== Oid);
        }

        history.replace({
            pathname: "/addresses/cabinets",
            search: qs.stringify(search)
        })
    }

    return <Chip key={Oid} label={DisplayName1} onDelete={handleDelete} />
}

export default CabinetChip;