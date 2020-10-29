type DayStudyEvent = {
  Start: string;
  End: string;
  Subject: string;
  TimeIntervalString: string;
  Dates: string;

  EducatorsDisplayText: string;
  IsCanceled: false;
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

type EventDay = {
  Day: number;
  DayString: string;
  DayStudyEventsCount: number;
  DayStudyEvents: DayStudyEvent[];
};

type ClassroomEventsDays = {
  Oid: string;
  From: string;
  To: string;

  DisplayText: string;
  HasEvents: boolean;

  ClassroomEventsDays: EventDay[];
};

export default ClassroomEventsDays;
