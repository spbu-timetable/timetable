import React from "react";
import transpose from "../../../../helpers/transpose";
import style from "../style.module.css";

export default function createDayTimetable(matrix: any, item_names: string[]) {
  const timetable = [];

  console.log(matrix);
  matrix = transpose(matrix);
  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    row.push(
      <td className={style.td}>
        <div className={style.cell}>{item_names[i]}</div>
      </td>
    );
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
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
    }
    timetable.push(<tr>{row}</tr>);
  }

  return timetable;
}
