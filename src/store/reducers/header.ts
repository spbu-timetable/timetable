import formatHeaderDateToStr from "../../helpers/formatHeaderDateToStr";
import getMonday from "../../helpers/getMonday";
import Action from "../../types/Action";
import Header from "../../types/Header";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/header";

function header(state: Header = initialState, action: Action): Header {
  switch (action.type) {
    case ACTION.SET_WEEK:
      const monday = new Date(getMonday(action.payload));
      const sunday = new Date(monday.getTime());
      sunday.setDate(sunday.getDate() + 6);

      return {
        ...state,

        fromDate: monday,
        toDate: sunday,

        fromDateStr: formatHeaderDateToStr(monday, 1),
        toDateStr: formatHeaderDateToStr(sunday, 2),
      };
  }

  return state;
}

export default header;
