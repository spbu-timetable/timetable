import Group from "../Group";

type GroupsPage = {
  didGet: boolean;
  filter_value: string;

  groups: Group[];
  filtered_groups: Group[];
  selected_groups: Group[];
};

export default GroupsPage;
