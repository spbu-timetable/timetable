import React from "react";
import { SavedItem } from "../../../../types/User";
import SearchListPage from "../../../Reusable/SearchListPage";

type Props = {
  didGet: boolean;
  cabinets: SavedItem[];

  filtered_cabinets: SavedItem[];
  selected_cabinets: SavedItem[];
  filter_value: string;

  fromDate: Date;
  toDate: Date;

  getUser: () => void;
  selectCabinet: (cabinet: SavedItem) => void;
  deselectCabinet: (cabinet: SavedItem) => void;
  getCabinetsTimetable: (cabinets: SavedItem[]) => void;
  updFilter: (value: string) => void;
};

const SavedCabinets = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      items={props.cabinets}
      filtered_items={props.filtered_cabinets}
      selected_items={props.selected_cabinets}
      filter_value={props.filter_value}
      updFilter={props.updFilter}
      getItems={props.getUser}
      setItem={props.selectCabinet}
      deselectItem={props.deselectCabinet}
      getTimetable={props.getCabinetsTimetable}
      fromDate={props.fromDate}
      toDate={props.toDate}
      url_to_push="/timetable"
      header_text="Сохраненные кабинеты"
    />
  );
};

export default SavedCabinets;
