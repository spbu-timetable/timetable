import Action from "../../types/Action";
import ACTION from "./ACTION";

function setTimetable(timetable: any): Action {
  return {
    type: ACTION.SET_TIMETABLE,
    payload: timetable,
  };
}

function finisFetchingData(): Action {
  return {
    type: ACTION.FINISH_FETCHING_TIMETABLE,
  };
}

function createTimeIntervals(timeIntervals: string[]): Action {
  return {
    type: ACTION.CREATE_TIME_INTERVALS,
    payload: timeIntervals,
  };
}

function setTimetableItems(items: string[], headers: string[]): Action {
  return {
    type: ACTION.SET_TIMETABLE_ITEMS,
    payload: items,
    headers: headers,
  };
}

function cleanTimetable(): Action {
  return {
    type: ACTION.CLEAN_TIMETABLE,
  };
}

const timetableAC = {
  setTimetable: setTimetable,
  finisFetchingData: finisFetchingData,
  createTimeIntervals: createTimeIntervals,
  setTimetableItems: setTimetableItems,
  cleanTimetable: cleanTimetable,
};

export default timetableAC;
