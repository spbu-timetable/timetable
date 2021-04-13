import { AnyAction, CombinedState } from "redux";
import Groups from ".";

import { connect } from "react-redux";
import GroupsPage from "../../../../../../../types/pages/GroupsPage";
import EducationYearsPage from "../../../../../../../types/pages/EducationYearsPage";
import groupAC from "../../../../../../../store/actionCreators/groupAC";
import Group from "../../../../../../../types/Group";
import Header from "../../../../../../../types/Header";

function mapStateToProps(
	state: CombinedState<{
		header: Header;
		educationYears: EducationYearsPage;
		groups: GroupsPage;
	}>
) {
	return {
		oid: String(state.educationYears.selected_ed_year!.StudyProgramId),
		filter_value: state.groups.filter_value,

		didGet: state.groups.didGet,
		groups: state.groups.groups,
		filtered_groups: state.groups.filtered_groups,
		selected_groups: state.groups.selected_groups,

		fromDate: state.header.fromDate,
		toDate: state.header.toDate,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getGroups: (oid: string | undefined) => {
			dispatch(groupAC.getGroups(oid!));
		},
		selectGroup: (group: Group) => {
			dispatch(groupAC.selectGroup(group));
		},
		deselectGroup: (group: Group) => {
			dispatch(groupAC.deselectGroup(group));
		},
		updFilter: (filterStr: string) => {
			dispatch(groupAC.updFilter(filterStr));
		},
		cleanGroups: () => {
			dispatch(groupAC.cleanGroups());
		},
		getGroupsTimetable: (selected_groups: Group[], fromDate?: Date, toDate?: Date) => {
			dispatch(groupAC.getGroupsTimetable(selected_groups, fromDate!, toDate!));
		},
	};
}

const GroupsContainer = connect(mapStateToProps, mapDispatchToProps)(Groups);

export default GroupsContainer;
