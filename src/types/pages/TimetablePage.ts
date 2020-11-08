import ClassroomEventsDay from "../ClassroomEventsDays";

type TimetablePage = {
  didGet: boolean;

  timeIntervals: string[];
  timetable: ClassroomEventsDay[];
};

export default TimetablePage;
