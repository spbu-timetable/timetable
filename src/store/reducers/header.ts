import { NewReleases } from "@material-ui/icons";
import Action from "../../types/Action";
import Header from "../../types/Header";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/header";

function header(state = initialState, action: Action): Header {
  switch (action.type) {
    case ACTION.SET_HEADER_BUTTON_TITLE:
      return {
        ...state,
        button_title: action.payload,
      };
    case ACTION.SET_WEEK:
      let newWeek = new Date();
      action.payload === 1
        ? newWeek.setDate(state.week.getDate() - 7)
        : newWeek.setDate(state.week.getDate() + 7);

      return {
        ...state,
        week: newWeek,
      };

    default:
      break;
  }

  return state;
}

export default header;
