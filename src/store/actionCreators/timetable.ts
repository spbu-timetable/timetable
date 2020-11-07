import Action from "../../types/Action";
import ClassroomEventsDays from "../../types/ClassroomEventsDays";
import ACTION from "./ACTION";

function setTimetable(classroomEventsDays: ClassroomEventsDays): Action {
  return {
    type: ACTION.SET_TIMETABLE,
    payload: {
      classroomEventsDays: classroomEventsDays,
    },
  };
}

const timetableAC = {
  setTimetable: setTimetable,
};

export default timetableAC;
