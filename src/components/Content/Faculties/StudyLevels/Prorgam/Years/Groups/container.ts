import { AnyAction, CombinedState } from "redux";
import Component from ".";

import { connect } from "react-redux";
import Groups from "../../../../../../../types/pages/Groups";
import groups from "../../../../../../../store/ac/groups";
import Group from "../../../../../../../types/Group";
import Header from "../../../../../../../types/Header";
import app from "../../../../../../../store/ac/app";

function mapStateToProps(
	state: CombinedState<{
		header: Header;
		groups: Groups;
	}>
) {
	return {
		filter: state.groups.filter,

		received: state.groups.received.get(state.groups.programID) || false,
		filtered: state.groups.filtered.get(state.groups.programID) || [],
		selected: state.groups.selected.get(state.groups.programID) || [],

		fromDate: state.header.fromDate,
		toDate: state.header.toDate,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		setProgramID: (programID: string) => {
			dispatch(groups.setProgramID(programID));
		},

		get: (oid: string | undefined) => {
			dispatch(groups.get(oid!));
		},

		select: (group: Group) => {
			dispatch(groups.select(group));
		},
		deselect: (group: Group) => {
			dispatch(groups.deselect(group));
		},
		updFilter: (filterStr: string) => {
			dispatch(groups.updFilter(filterStr));
		},

		getTimetable: (selected_groups: Group[], fromDate?: Date, toDate?: Date) => {
			dispatch(groups.getTimetable(selected_groups, fromDate!, toDate!));
		},

		startLoading: () => {
			dispatch(app.startLoading());
		},

		stopLoading: () => {
			dispatch(app.stopLoading());
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
