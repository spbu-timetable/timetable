/**
 * @param {Date} date date to parse
 * @param {boolean} isStart true if start, false if end
 * @returns returns parsed date with 0700 at the end if true and 2000
 */

function formatDateToRequest(date: Date, isStart: boolean): string {
  const parsedString: string =
    `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`;
  return isStart ? parsedString + `0700` : parsedString + `2000`;
}

export default formatDateToRequest;
