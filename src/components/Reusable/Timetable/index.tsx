import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import ClassroomEventsDay from "../../../types/ClassroomEventsDays";
import List from "./List/container";

type Props = {
  didGet: boolean;
  timetable: ClassroomEventsDay[][];
};

const Timetable = (props: Props) => {
  return (
    <div>
      {props.didGet ? <>{props.timetable.length > 1 ? <List /> : <></>}</> : <CircularProgress />}
    </div>
  );
};

export default Timetable;
