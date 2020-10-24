import React from "react";
import style from "./style.module.css";

import Cabinet from "../../../../types/Cabinet";

import Table from "@material-ui/core/Table";
import { TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

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
    <TableCell className={style.head}>{cabinet.DisplayName1}</TableCell>
  ));

  return (
    <div>
      <div className={style.wrapper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={props.selected_cabinets.length} className={style.weekday_head}>
                Понедельник
              </TableCell>
            </TableRow>
            <TableRow>{cabinets_component}</TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TimetableList;
