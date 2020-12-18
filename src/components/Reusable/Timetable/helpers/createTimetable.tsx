import React from "react";
import style from "../style.module.css";
import createDayTimetable from "./createDayTimetable";
import createIntervalsRow from "./createIntervalsRow";
import Typography from "@material-ui/core/Typography";

export default function createTimetableComponent(timetable: any, items: string[]) {
  const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const tables = [];

  for (let i = 0; i < timetable.length; i++) {
    const fullRow: number = items.length + 1;
    const intervals = items.length > 1 ? createIntervalsRow(items) : [];
    const day_timetable = createDayTimetable(timetable[i][1], timetable[i][0]);

    tables.push(
      <React.Fragment key={i}>
        <tr className={style.head}>
          <td className={style.td} colSpan={fullRow}>
            <Typography variant="h5" component="h5">
              {weekdays[i]}
            </Typography>
          </td>
        </tr>

        <>
          {timetable[i][0].length === 0 ? (
            <tr className={style.free_day}>
              <td className={style.td} colSpan={fullRow}>
                <Typography variant="h6" component="h6">
                  День свободен
                </Typography>
              </td>
            </tr>
          ) : (
            <tr>{intervals}</tr>
          )}
        </>
        {timetable[i][0].length === 0 ? <></> : <>{day_timetable}</>}
      </React.Fragment>
    );
  }
  return (
    <table className={style.table}>
      <tbody>{tables}</tbody>
    </table>
  );
}
