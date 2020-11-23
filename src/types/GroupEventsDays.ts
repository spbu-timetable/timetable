type EventLocation = {
  IsEmpty: boolean;
  DisplayName: string;
  HasGeographicCoordinates: boolean;
  Latitude: number;
  Longitude: number;
  LatitudeValue: string;
  LongitudeValue: string;
  EducatorsDisplayText: string;
  HasEducators: boolean;
  EducatorIds: {
    Item1: number;
    Item2: string;
  };
};
type DayStudyEvent = {
  StudyEventsTimeTableKindCode: number;
  Start: string;
  End: string;
  Subject: string;
  TimeIntervalString: string;
  DateWithTimeIntervalString: string;
  DisplayDateAndTimeIntervalString: string;
  LocationsDisplayText: string;
  EducatorsDisplayText: string;
  HasEducators: boolean;
  IsCancelled: boolean;
  ContingentUnitName: string;
  DivisionAndCourse: string;
  IsAssigned: boolean;
  TimeWasChanged: boolean;
  LocationsWereChanged: boolean;
  EducatorsWereReassigned: boolean;
  ElectiveDisciplinesCount: number;
  IsElective: boolean;
  HasTheSameTimeAsPreviousItem: boolean;
  ContingentUnitsDisplayTest: string | null;
  IsStudy: boolean;
  AllDay: boolean;
  WithinTheSameDay: boolean;
  EventLocations: EventLocation;
  EducatorIds: {
    Item1: number;
    Item2: string;
  };
};

type GroupEventsDay = {
  Day: string;
  DayString: string;
  DayStudyEvents: DayStudyEvent[];
};

export default GroupEventsDay;
