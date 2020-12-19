import React from "react";
import { SavedItem } from "../../../../types/User";
import SearchListPage from "../../../Reusable/SearchListPage";

type Props = {
  didGet: boolean;
  educators: SavedItem[];

  filtered_educators: SavedItem[];
  selected_educators: SavedItem[];
  filter_value: string;

  fromDate: Date;
  toDate: Date;

  getUser: () => void;
  selectEducator: (educator: SavedItem) => void;
  deselectEducator: (educator: SavedItem) => void;
  getEducatorsTimetable: (educators: SavedItem[], fromDate: Date, toDate: Date) => void;
  updFilter: (value: string) => void;
  removeEducator: (educator: SavedItem) => void;
};

const SavedEducators = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      items={props.educators}
      filtered_items={props.filtered_educators}
      selected_items={props.selected_educators}
      filter_value={props.filter_value}
      updFilter={props.updFilter}
      getItems={props.getUser}
      setItem={props.selectEducator}
      deselectItem={props.deselectEducator}
      getTimetable={props.getEducatorsTimetable}
      fromDate={props.fromDate}
      toDate={props.toDate}
      url_to_push="/timetable"
      header_text="Сохраненные Преподаватели"
      actionBtnIcon="remove"
      actionBtnAction={props.removeEducator}
      isDialog={true}
      dialogTitle="Удалить"
    />
  );
};

export default SavedEducators;
