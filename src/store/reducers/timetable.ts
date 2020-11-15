import Action from "../../types/Action";
import TimetablePage from "../../types/pages/TimetablePage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/timetable";

function timetable(
  state: TimetablePage = initialState,
  action: Action
): TimetablePage {
  switch (action.type) {
    case ACTION.SET_TIMETABLE:
      return {
        ...state,
        timetable: action.payload,
      };

    case ACTION.SET_TIMETABLE_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case ACTION.FINISH_FETCHING_TIMETABLE:
      return {
        ...state,
        didGet: true,
      };
  }

  return state;
}

export default timetable;
