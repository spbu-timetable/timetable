/**
 * @param date picked date
 * @returns Date object but the day is monday
 */
function getMonday(date: Date): Date {
  date = new Date(date);
  var day = date.getDay(),
    diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
}

export default getMonday;
