import React from "react";

import Cabinet from "../../../types/Cabinet";
import SearchListPage from "../../Reusable/SearchListPage";

type Props = {
  oid: string;
  didGet: boolean;
  filter_value: string;

  cabinets: Cabinet[];
  filtered_cabinets: Cabinet[];
  selected_cabinets: Cabinet[];

  getCabinets: (oid: string | undefined) => void;
  selectCabinet: (cabinet: Cabinet) => void;
  deselectCabinet: (cabinet: Cabinet) => void;
  updFilter: (filterStr: string) => void;

  cleanCabinets: () => void;

  fromDate: Date;
  toDate: Date;
  getCabinetsTimetable?: (selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date) => void;
};

const Cabinets = (props: Props) => {
  return (
    <SearchListPage
      url_to_push="/timetable"
      header_text="Кабинеты"
      oid={props.oid}
      didGet={props.didGet}
      filter_value={props.filter_value}
      items={props.cabinets}
      filtered_items={props.filtered_cabinets}
      selected_items={props.selected_cabinets}
      getItems={props.getCabinets}
      setItem={props.selectCabinet}
      deselectItem={props.deselectCabinet}
      updFilter={props.updFilter}
      cleanItems={props.cleanCabinets}
      fromDate={props.fromDate}
      toDate={props.toDate}
      getTimetable={props.getCabinetsTimetable}
    />
  );
};

export default Cabinets;
