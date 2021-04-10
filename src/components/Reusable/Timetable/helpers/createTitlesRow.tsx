import Typography from "@material-ui/core/Typography";
import React from "react";
import style from "../style.module.css";

export default function createTitlesRow(intervalStrings: string[]): JSX.Element[] {
	const intervals: JSX.Element[] = [];

	intervals.push(
		<td className={style.td + " " + style.interval} key={0}>
			{""}
		</td>
	);
	intervalStrings.forEach((intervalString, index: number) => {
		intervals.push(
			<td className={style.td + " " + style.interval} key={index}>
				<Typography color="textPrimary">{intervalString}</Typography>
			</td>
		);
	});

	return intervals;
}
