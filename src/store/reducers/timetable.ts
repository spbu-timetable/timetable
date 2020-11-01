import Action from "../../types/Action";
import TimetablePage from "../../types/pages/TimetablePage";
import initialState from "../states/timetable";

function timetable(state: TimetablePage = initialState, action: Action): TimetablePage {
  switch (action.type) {
    default:
      break;
  }

  return state;
}

export default timetable;
