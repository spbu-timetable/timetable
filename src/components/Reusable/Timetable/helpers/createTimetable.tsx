import React from "react";
import style from "../style.module.css";
import createDayTimetable from "./createDayTimetable";
import createItemsRow from "./createItemsRow";
import Typography from "@material-ui/core/Typography";

export default function createTimetableComponent(timetable: any, items: string[]) {
  const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const tables = [];

  for (let i = 0; i < timetable.length; i++) {
    const fullRow: number = items.length + 1;
    const intervals = items.length > 1 ? createItemsRow(items) : [];
    const day_timetable = createDayTimetable(timetable[i][1], timetable[i][0]);

    tables.push(
      <table key={i} className={style.table}>
        <thead className={style.head}>
          <tr>
            <td className={style.head_td} colSpan={fullRow}>
              <Typography variant="h5" component="h5">
                {weekdays[i]}
              </Typography>
            </td>
          </tr>
        </thead>
        <tbody>
          {timetable[i][0].length === 0 ? (
            <tr>
              <td className={style.td} colSpan={fullRow}>
                <div className={style.free_cell}>
                  <Typography variant="h5" component="h5">
                    День свободен
                  </Typography>
                </div>
              </td>
            </tr>
          ) : (
            <tr>{intervals}</tr>
          )}
          {timetable[i][0].length === 0 ? <></> : <>{day_timetable}</>}
        </tbody>
      </table>
    );
  }
  return tables;
}
