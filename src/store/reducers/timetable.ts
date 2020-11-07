import Action from "../../types/Action";
import TimetablePage from "../../types/pages/TimetablePage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/timetable";

function timetable(state: TimetablePage = initialState, action: Action): TimetablePage {
  switch (action.type) {
    case ACTION.SET_TIMETABLE:
      return {
        ...state,
        timetable: [...state.timetable, action.payload],
      };
  }

  return state;
}

export default timetable;
