import React from "react";
import transpose from "../../../../helpers/transpose";
import Event from "../../../../types/Event";
import style from "../style.module.css";

function createCell(event: Event): JSX.Element[] {
  const items: JSX.Element[] = [];

  for (let i = 0; i < event.main.length; i++) {
    items.push(
      <div key={i} className={style.cell_item}>
        {event.main[i]}
        <br />
        {event.extra[i]}
        <br />
      </div>
    );
  }
  return items;
}

export default function createDayTimetable(matrix: any, intervals: string[]): JSX.Element[] {
  const timetable: JSX.Element[] = [];

  matrix = transpose(matrix);

  for (let i = 0; i < matrix.length; i++) {
    const row = [];

    row.push(
      <td key={i} className={style.td}>
        <div className={style.cell}>{intervals[i]}</div>
      </td>
    );

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        const cell = createCell(matrix[i][j]);
        row.push(
          <td key={Math.random()} className={style.td}>
            <div className={style.cell}>{cell}</div>
          </td>
        );
      }
    }
    timetable.push(<tr key={i}>{row}</tr>);
  }

  return timetable;
}
