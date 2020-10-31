import { CombinedState } from "redux";
import Groups from ".";


import { connect } from "react-redux";
import Action from "../../../../../../../types/Action";
import GroupsPage from "../../../../../../../types/pages/GroupsPage";
import EducationYearsPage from "../../../../../../../types/pages/EducationYearsPage";
import groupAC from "../../../../../../../store/actionCreators/groupAC";
import Group from "../../../../../../../types/Group";

function mapStateToProps(
  state: CombinedState<{
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
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
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
  };
}

const GroupsContainer = connect(mapStateToProps, mapDispatchToProps)(Groups);

export default GroupsContainer;