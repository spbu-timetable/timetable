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

    intervals.push(<td key={0}>{""}</td>);
    intervalStrings.forEach((intervalString) => {
      intervals.push(<td key={intervalString}>{intervalString}</td>);
    });

    return intervals;
  }

  function createDayTimetable(matrix: any, item_names: string[]) {
    const timetable = [];

    for (let i = 0; i < matrix.length; i++) {
      const row = [];
      row.push(<td>{item_names[i]}</td>);
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(
          <td>{`
          ${matrix[i][j].Subject}
          ${matrix[i][j].EducatorsDisplayText}
          `}</td>
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
            <td colSpan={fullRow}>{weekdays[i]}</td>
          </tr>
        </thead>
        <tbody>
          {props.timetable[i][0].length === 0 ? (
            <tr>
              <td colSpan={fullRow}>День свободен</td>
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
