import React from "react";
import SearchListPage from "../../Reusable/SearchListPage";
import Educator from "../../../types/Educator";

type Props = {
  didGet: boolean;

  filter_value: string;
  selected_educators: Educator[];
  filtered_educators: Educator[];

  selectEducator: (educator: Educator) => void;
  deselectEducator: (educator: Educator) => void;
  updFilter: (filter_value: string) => void;
  updFilterValue: (filter_value: string) => void;

  fromDate: Date;
  toDate: Date;
  getEducatorsTimetable: (selected_educators: Educator[], fromDate?: Date, toDate?: Date) => void;
};

const Educators = (props: Props) => {
  return (
    <SearchListPage
      url_to_push="/timetable"
      header_text="Выберите преподавателей"
      didGet={props.didGet}
      filter_value={props.filter_value}
      filtered_items={props.filtered_educators}
      selected_items={props.selected_educators}
      setItem={props.selectEducator}
      deselectItem={props.deselectEducator}
      updFilter={props.updFilter}
      fromDate={props.fromDate}
      toDate={props.toDate}
      updFilterValue={props.updFilterValue}
      getTimetable={props.getEducatorsTimetable}
    />
  );
};

export default Educators;
