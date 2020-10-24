import React from "react";
import style from "./style.module.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const WeekdayTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell /*colSpan={props.selected_cabinets.length}*/ className={style.weekday_head}>
            Понедельник
          </TableCell>
        </TableRow>
        <TableRow></TableRow>
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
};

export default WeekdayTable;
