import React from "react";
import style from "../style.module.css";

export default function createIntervalsRow(
  intervalStrings: string[]
): JSX.Element[] {
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
