import React from "react";
import { SavedItem } from "../../../../types/User";
import SearchListPage from "../../../Reusable/SearchListPage";

type Props = {
  didGet: boolean;
  groups: SavedItem[];

  filtered_groups: SavedItem[];
  selected_groups: SavedItem[];
  filter_value: string;

  fromDate: Date;
  toDate: Date;

  getUser: () => void;
  selectGroup: (educator: SavedItem) => void;
  deselectGroup: (educator: SavedItem) => void;
  getGroupsTimetable: (educators: SavedItem[], fromDate: Date, toDate: Date) => void;
  updFilter: (value: string) => void;
  removeGroup: (educator: SavedItem) => void;
};

const SavedGroups = (props: Props) => {
  return (
    <SearchListPage
      didGet={props.didGet}
      items={props.groups}
      filtered_items={props.filtered_groups}
      selected_items={props.selected_groups}
      filter_value={props.filter_value}
      updFilter={props.updFilter}
      getItems={props.getUser}
      setItem={props.selectGroup}
      deselectItem={props.deselectGroup}
      getTimetable={props.getGroupsTimetable}
      fromDate={props.fromDate}
      toDate={props.toDate}
      url_to_push="/timetable"
      header_text="Сохраненные Группы"
      actionBtnIcon="remove"
      actionBtnAction={props.removeGroup}
      isDialog={true}
      dialogTitle="Удалить"
    />
  );
};

export default SavedGroups;
