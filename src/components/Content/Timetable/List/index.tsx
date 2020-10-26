import React from "react";
import style from "./style.module.css";

import Cabinet from "../../../../types/Cabinet";

type Props = {
  selected_cabinets: Cabinet[];

  startDate: Date;
  endDate: Date;

  getCabinetTimetable: (
    cabinetIndex: number,
    cabinetOid: string,
    startDate: Date,
    endDate: Date
  ) => void;
};

const TimetableList = (props: Props) => {
  return <div></div>;
};

export default TimetableList;
