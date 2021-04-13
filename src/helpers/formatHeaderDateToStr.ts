/**
 * Reduces a sequence of names to initials.
 * @param  {Date} date  date to be formatted.
 * @param  {String} index   1 if monday, 2 if sunday.
 * @return {String}       Properly formatted date string.
 */
function formatHeaderDateToStr(date: Date, index: number): string {
	const year = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(date);
	const month = new Intl.DateTimeFormat("ru", { month: "2-digit" }).format(date);
	const day = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(date);

	return index === 1 ? `${day}/${month}/${year}` : `${day}/${month}/${year}`;
}

export default formatHeaderDateToStr;
