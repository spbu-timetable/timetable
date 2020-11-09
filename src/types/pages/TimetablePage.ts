import ClassroomEventsDay from "../ClassroomEventsDays";

type TimetablePage = {
  didGet: boolean;

  timeIntervals: string[];
  timetable: ClassroomEventsDay[][];
  items: string[];
};

export default TimetablePage;
