/**
 * @param {Date} date date to parse
 * @param {boolean} isStart true if start, false if end
 * @returns returns parsed date with 0700 at the end if true and 2000
 */

function setMonthStr(date: Date): string {
  return date.getMonth() + 1 < 10 ? "0" + String(date.getMonth() + 1) : String(date.getMonth() + 1);
}
function setDayStr(date: Date): string {
  return date.getDate() < 10 ? "0" + String(date.getDate()) : String(date.getDate());
}

function formatDateToRequest(date: Date, isStart: boolean): string {
  const parsedString: string = String(date.getFullYear()) + setMonthStr(date) + setDayStr(date);

  return isStart ? parsedString + `0700` : parsedString + `2000`;
}

export default formatDateToRequest;
