import React from "react";
import { Drawer as MuiDrawer } from "@mui/material"
import { useAppSelector } from "../../../store/hooks";

const Drawer: React.FC = () => {

    const { layout } = useAppSelector(state => state.app);

    const anchor = layout === "desktop" ? "left" : "bottom";

    return (
        <MuiDrawer
            anchor={anchor}
        >

        </MuiDrawer>
    )
}

export default Drawer;