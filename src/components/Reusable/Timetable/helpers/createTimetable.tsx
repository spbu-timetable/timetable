import React from "react";
import style from "../style.module.css";
import createDayTimetable from "./createDayTimetable";
import createTitlesRow from "./createTitlesRow";
import Typography from "@material-ui/core/Typography";

export default function createTimetableComponent(timetable: any, items: string[]) {
	const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

	const tables = [];

	for (let i = 0; i < timetable.length; i++) {
		const fullRow: number = items.length + 1;
		const intervals = items.length > 1 ? createTitlesRow(items) : [];
		const day_timetable = createDayTimetable(timetable[i][1], timetable[i][0]);

		tables.push(
			<>
				<tr key={i} className={style.head}>
					<td className={style.td} colSpan={fullRow}>
						<Typography color="textPrimary" variant="h5">
							{weekdays[i]}
						</Typography>
					</td>
				</tr>

				<>
					{timetable[i][0].length === 0 ? (
						<tr key={i + 100} className={style.free_day}>
							<td className={style.td} colSpan={fullRow}>
								<Typography color="textPrimary" variant="h6">
									День свободен
								</Typography>
							</td>
						</tr>
					) : (
						<tr key={Math.random()}>{intervals}</tr>
					)}
				</>
				{timetable[i][0].length === 0 ? <></> : <>{day_timetable}</>}
			</>
		);
	}
	return (
		<table className={style.table}>
			<tbody>{tables}</tbody>
		</table>
	);
}
