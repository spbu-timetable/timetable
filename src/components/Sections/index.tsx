import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appSlice } from "../../store/reducers/app";

const Sections: React.FC = () => {

    const { section } = useAppSelector((state) => state.app);
    const { setSection } = appSlice.actions;
    const dispatch = useAppDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(setSection(newValue))
    }

    return (
        <Tabs
            value={section}
            onChange={handleChange}
            centered
            textColor="secondary"
            variant="fullWidth"
            indicatorColor="secondary">
            <Tab label="Кабинеты" />
            <Tab label="Преподаватели" />
            <Tab label="Группы" />
        </Tabs>
    )
}

export default Sections;