import Action from "../../types/Action";
import ACTION from "./ACTION";

function getTimetable(
  selected_ids: string[],
  category: "cabinets" | "educators" | "groups"
): Action {
  return {
    type: ACTION.GET_TIMETABLE,
    payload: {
      selected_ids: selected_ids,
      category: category,
    },
  };
}

function setTimetable(): Action {
  return {
    type: ACTION.SET_TIMETABLE,
  };
}

const timetableAC = {
  getTimetable: getTimetable,
  setTimetable: setTimetable,
};

export default timetableAC;
