import React from "react";
import style from "../style.module.css";

export default function createIntervalsRow(intervalStrings: string[]): JSX.Element[] {
  const intervals: JSX.Element[] = [];

  intervals.push(
    <td className={style.td + " " + style.interval} key={0}>
      {""}
    </td>
  );
  intervalStrings.forEach((intervalString, index: number) => {
    intervals.push(
      <td className={style.td + " " + style.interval} key={index}>
        {intervalString}
      </td>
    );
  });

  return intervals;
}
