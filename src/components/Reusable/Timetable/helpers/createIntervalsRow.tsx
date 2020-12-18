import React from "react";
import style from "../style.module.css";

export default function createIntervalsRow(intervalStrings: string[]): JSX.Element[] {
  const intervals: JSX.Element[] = [];

  intervals.push(
    <td key={0} className={style.td + " " + style.interval}>
      {""}
    </td>
  );
  intervalStrings.forEach((intervalString, index: number) => {
    intervals.push(
      <td key={index + 1} className={style.td + " " + style.interval}>
        {intervalString}
      </td>
    );
  });

  return intervals;
}
