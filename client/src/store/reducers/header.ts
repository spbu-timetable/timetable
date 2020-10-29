import formatHeaderDateToStr from "../../helpers/formatHeaderDateToStr";
import getMonday from "../../helpers/getMonday";
import Action from "../../types/Action";
import Header from "../../types/Header";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/header";

function header(state: Header = initialState, action: Action): Header {
  switch (action.type) {
    case ACTION.SET_HEADER_BUTTON_TITLE:
      return {
        ...state,
        button_title: action.payload,
      };
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

    case ACTION.SET_LANG:
      let lang: boolean;
      if (
        (action.payload === false && state.isRussian === false) ||
        (action.payload === true && state.isRussian === true)
      ) {
        lang = state.isRussian;
      } else {
        lang = !state.isRussian;
      }
      return {
        ...state,
        isRussian: lang,
      };

    default:
      break;
  }

  return state;
}

export default header;
