import formatHeaderDateToStr from "../../../helpers/formatHeaderDateToStr";
import getMonday from "../../../helpers/getMonday";
import Header from "../../../types/pages/Header";

const setWeek = (date: Date, state: Header): Header => {
	const monday = new Date(getMonday(date));
	const sunday = new Date(monday.getTime());
	sunday.setDate(sunday.getDate() + 6);

	return {
		...state,

		fromDate: monday,
		toDate: sunday,

		fromDateStr: formatHeaderDateToStr(monday, 1),
		toDateStr: formatHeaderDateToStr(sunday, 2),
	};
};

export default setWeek;
