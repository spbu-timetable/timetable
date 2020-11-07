import React from "react";
import List from "./List/container";

type Props = {
  didGet: boolean;
  selected_ids: string[];
  timetable: string[];
};

const Timetable = (props: Props) => {
  return (
    <div>
      <List />
    </div>
  );
};

export default Timetable;
