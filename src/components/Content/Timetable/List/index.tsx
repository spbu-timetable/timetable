import React from "react";
import style from "./style.module.css";
import Paper from "@material-ui/core/Paper";
import Cabinet from "../../../../types/Cabinet";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Schedule from "@material-ui/icons/Schedule";
import ListItemText from "@material-ui/core/ListItemText";

import { Face, Group, School } from "@material-ui/icons";

type Props = {
  selected_cabinets: Cabinet[];

  startDate: Date;
  endDate: Date;

  getCabinetTimetable: (
    cabinetIndex: number,
    cabinetOid: string,
    startDate: Date,
    endDate: Date
  ) => void;
};

const TimetableList = (props: Props) => {
  for (let i = 0; i < props.selected_cabinets.length; i++) {
    props.getCabinetTimetable(i, props.selected_cabinets[i].Oid, props.startDate, props.endDate);
  }

  const cabinets_component = props.selected_cabinets.map((cabinet: Cabinet) => (
    <Paper className={style.day_list} elevation={0} variant="outlined">
      {cabinet.DisplayName1}
    </Paper>
  ));

  return (
    <div>
      <div className={style.weekday}>Понедельник</div>
      <div className={style.wrapper}>
        <Paper className={style.day_list} elevation={0} variant="outlined">
          <div className={style.cabinet}>Кабинет 202</div>
          <List className={style.list}>
            <ListItem className={style.item} divider={true}>
              <ListItemIcon>
                <Schedule />
              </ListItemIcon>
              <ListItemText>09:30-11:05</ListItemText>
            </ListItem>
            <ListItem className={style.item} divider={true}>
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText>Основы программирования</ListItemText>
            </ListItem>
            <ListItem className={style.item} divider={true}>
              <ListItemIcon>
                <Face />
              </ListItemIcon>
              <ListItemText>Блеканов И.С</ListItemText>
            </ListItem>
            <ListItem className={style.item}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText>18.Б11-пу</ListItemText>
            </ListItem>
          </List>
          <div className={style.date}></div>
        </Paper>
        {cabinets_component}
      </div>
    </div>
  );
};

export default TimetableList;
