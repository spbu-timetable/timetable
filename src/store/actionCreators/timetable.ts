import Action from "../../types/Action";
import ClassroomEventsDay from "../../types/ClassroomEventsDays";
import ACTION from "./ACTION";

function setTimetable(classroomEventsDays: ClassroomEventsDay): Action {
  return {
    type: ACTION.SET_TIMETABLE,
    payload: {
      classroomEventsDays: classroomEventsDays,
    },
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

const timetableAC = {
  setTimetable: setTimetable,
  finisFetchingData: finisFetchingData,
  createTimeIntervals: createTimeIntervals,
};

export default timetableAC;
