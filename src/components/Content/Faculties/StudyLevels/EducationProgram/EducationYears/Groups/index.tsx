import React from "react";

import SearchListPage from "../../../../../../Reusable/SearchListPage";
import Group from "../../../../../../../types/Group";

type Props = {
  oid: string;
  didGet: boolean;
  filter_value: string;

  groups: Group[];
  filtered_groups: Group[];
  selected_groups: Group[];

  getGroups: (oid: string | undefined) => void;
  selectGroup: (group: Group) => void;
  deselectGroup: (group: Group) => void;
  updFilter: (filterStr: string) => void;

  cleanGroups: () => void;

  fromDate: Date;
  toDate: Date;
  getGroupsTimetable: (selected_groups: Group[], fromDate?: Date, toDate?: Date) => void;
};

const Groups = (props: Props) => {
  return (
    <SearchListPage
      url_to_push="/timetable"
      header_text="Выберите группы"
      oid={props.oid}
      didGet={props.didGet}
      filter_value={props.filter_value}
      items={props.groups}
      filtered_items={props.filtered_groups}
      selected_items={props.selected_groups}
      getItems={props.getGroups}
      setItem={props.selectGroup}
      deselectItem={props.deselectGroup}
      updFilter={props.updFilter}
      cleanItems={props.cleanGroups}
      fromDate={props.fromDate}
      toDate={props.toDate}
    />
  );
};

export default Groups;
