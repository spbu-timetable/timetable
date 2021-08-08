/**
 * Reduces a sequence of names to initials.
 * @param  {Date} date  date to be formatted.
 * @param  {String} index   1 if monday, 2 if sunday.
 * @return {String}       Properly formatted date string.
 */
const formatHeaderDateToStr = (date: Date): string => {
	const year = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(date);
	const month = new Intl.DateTimeFormat("ru", { month: "2-digit" }).format(date);
	const day = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(date);

	return `${day}/${month}/${year}`;
}

export default formatHeaderDateToStr;
