type DayStudyEvent = {
  Start: string;
  End: string;
  Subject: string;
  TimeIntervalString: string;
  Dates: string[];

  EducatorsDisplayText: string;
  IsCanceled: boolean;
  StudyEventsTimeTableKindCode: number;
  EducatorIds: {
    Item1: number;
    Item2: string;
  };
  ContingentUnitNames: {
    Item1: string;
    Item2: string;
  };
};

type ClassroomEventsDay = {
  Day: number;
  DayString: string;
  DayStudyEventsCount: number;
  DayStudyEvents: DayStudyEvent[];
};

export default ClassroomEventsDay;
