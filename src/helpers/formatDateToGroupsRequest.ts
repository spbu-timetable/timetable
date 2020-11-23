/**
 * @param {Date} date date to parse
 * @returns returns parsed date
 */

function setMonthStr(date: Date): string {
    return date.getMonth() === 12 ? String(date.getMonth()) : String(date.getMonth() + 1);
  }
  function setDayStr(date: Date): string {
    return String(date.getDate());
  }
  
  function formatDateToGroupsRequest(date: Date): string {
    const parsedString: string = String(date.getFullYear()) + '-' + setMonthStr(date) + '-' + setDayStr(date);
  
    return  parsedString;
  }
  
  export default formatDateToGroupsRequest;