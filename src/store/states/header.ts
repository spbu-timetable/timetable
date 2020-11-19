import formatHeaderDateToStr from "../../helpers/formatHeaderDateToStr";
import getMonday from "../../helpers/getMonday";
import Header from "../../types/Header";

const monday = new Date(getMonday(new Date(Date.now())));
const sunday = new Date(monday.getTime());
sunday.setDate(sunday.getDate() + 6);

const header: Header = {
  week: new Date(Date.now()),

  fromDate: monday,
  toDate: sunday,

  fromDateStr: formatHeaderDateToStr(monday, 1),
  toDateStr: formatHeaderDateToStr(sunday, 2),
};

export default header;
