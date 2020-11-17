import Typography from "@material-ui/core/Typography";
import React from "react";
import style from "./style.module.css";

type Props = {
  items: string[];
  timetable: any;
};

const weekdays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const TimetableList = (props: Props) => {
  const tables = [];

  function createIntervalsRow(intervalStrings: string[]): JSX.Element[] {
    const intervals: JSX.Element[] = [];

    intervals.push(
      <td className={style.td} key={0}>
        {""}
      </td>
    );
    intervalStrings.forEach((intervalString) => {
      intervals.push(
        <td className={style.td} key={intervalString}>
          {intervalString}
        </td>
      );
    });

    return intervals;
  }

  function createDayTimetable(matrix: any, item_names: string[]) {
    const timetable = [];

    for (let i = 0; i < matrix.length; i++) {
      const row = [];
      row.push(
        <td className={style.td}>
          <div className={style.cell}>{item_names[i]}</div>
        </td>
      );
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(
          <td className={style.td}>
            <div className={style.cell}>
              {matrix[i][j].Subject}
              <br />
              {matrix[i][j].EducatorsDisplayText}
            </div>
          </td>
        );
      }
      timetable.push(<tr>{row}</tr>);
    }

    return timetable;
  }

  for (let i = 0; i < props.timetable.length; i++) {
    const fullRow: number = props.timetable[i][0].length + 1;
    const intervals = createIntervalsRow(props.timetable[i][0]);
    const timetable = createDayTimetable(props.timetable[i][1], props.items);

    tables.push(
      <table key={i} className={style.list}>
        <thead className={style.head}>
          <tr>
            <td className={style.head_td} colSpan={fullRow}>
              <Typography>{weekdays[i]}</Typography>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.timetable[i][0].length === 0 ? (
            <tr>
              <td className={style.td} colSpan={fullRow}>
                <div className={style.free_cell}>День свободен</div>
              </td>
            </tr>
          ) : (
            <tr>{intervals}</tr>
          )}
          {props.timetable[i][0].length === 0 ? <></> : <>{timetable}</>}
        </tbody>
      </table>
    );
  }

  return <div className={style.wrapper}>{tables}</div>;
};

export default TimetableList;
