import Group from "../Group";

type GroupsPage = {
  didGet: boolean;
  filter_value: string;

  groups: Group[];
  filtered: Group[];
  selected: Group[];
};

export default GroupsPage;
