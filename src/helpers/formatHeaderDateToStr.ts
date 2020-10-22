/**
 * Reduces a sequence of names to initials.
 * @param  {Date} date  date to be formatted.
 * @param  {String} index   1 if monday, 2 if suday.
 * @return {String}       Properly formatted date string.
 */
function formatHeaderDateToStr(date: Date, index: number): string {
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  return index === 1 ? `${day} ${month}` : `${day} ${month} ${year}`;
}

export default formatHeaderDateToStr;
