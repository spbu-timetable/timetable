import { Stack } from "@mui/material";
import React from "react"
import Section from "./Section";

const Sections: React.FC = () => (
    <Stack spacing={2} alignItems="center" >
        <Section title="Кабинеты" link="addresses" />
        <Section title="Преподаватели" link="teachers" />
        <Section title="Группы" link="groups" />
    </Stack >
)

export default Sections;