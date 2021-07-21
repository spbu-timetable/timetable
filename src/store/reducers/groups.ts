import { AnyAction } from "redux";
import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";
import Group from "../../types/Group";
import GroupsPage from "../../types/pages/GroupsPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/groups";

function groups(state: GroupsPage = initialState, action: AnyAction): GroupsPage {
	switch (action.type) {
		case ACTION.SET_GROUPS:
			return {
				...state,
				didGet: true,
				groups: action.payload.Groups.sort((a: Group, b: Group) => sortList(a.StudentGroupName, b.StudentGroupName)),
			};
		case ACTION.CLEAN_GROUPS:
			return {
				...state,
				didGet: false,
				groups: [],
				selected: [],
			};

		case ACTION.SELECT_GROUP:
			if (!state.selected.includes(action.payload) /*&& state.selected_groups.length < 4*/) {
				return {
					...state,
					selected: [...state.selected, action.payload].sort((a: Group, b: Group) =>
						sortList(a.StudentGroupName, b.StudentGroupName)
					),
				};
			}
			break;

		case ACTION.DESELECT_GROUP:
			for (let i = 0; i < state.selected.length; i++) {
				if (action.payload === state.selected[i]) {
					state.selected.splice(i, 1);
				}
			}
			return {
				...state,
			};

		case ACTION.FILTER_GROUPS:
			return {
				...state,
				filter_value: action.payload,
				filtered: filterSearch(state.groups, action.payload),
			};
	}

	return state;
}

export default groups;
