import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";
import Action from "../../types/Action";
import Group from "../../types/Group";
import GroupsPage from "../../types/pages/GroupsPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/groups";

function groups(state: GroupsPage = initialState, action: Action): GroupsPage {
  switch (action.type) {
    case ACTION.SET_GROUPS:
      return {
        ...state,
        didGet: true,
        groups: action.payload.Groups.sort((a: Group, b: Group) =>
          sortList(a.StudentGroupName, b.StudentGroupName)
        ),
      };
    case ACTION.CLEAN_GROUPS:
      return {
        ...state,
        didGet: false,
        groups: [],
        selected_groups: [],
      };

    case ACTION.SELECT_GROUP:
      if (!state.selected_groups.includes(action.payload) && state.selected_groups.length < 4) {
        return {
          ...state,
          selected_groups: [...state.selected_groups, action.payload],
        };
      }
      break;

    case ACTION.DESELECT_GROUP:
      for (let i = 0; i < state.selected_groups.length; i++) {
        if (action.payload === state.selected_groups[i]) {
          state.selected_groups.splice(i, 1);
        }
      }
      return {
        ...state,
      };

    case ACTION.FILTER_GROUPS:
      return {
        ...state,
        filter_value: action.payload,
        filtered_groups: filterSearch(state.groups, action.payload),
      };
  }

  return state;
}

export default groups;
