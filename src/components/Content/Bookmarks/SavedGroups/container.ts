import { CombinedState } from "redux";
import { connect } from "react-redux";

import SavedGroups from ".";

import AccountPage from "../../../../types/pages/AccountPage";
import Action from "../../../../types/Action";
import authAC from "../../../../store/actionCreators/authAC";
import { SavedItem } from "../../../../types/User";
import userAC from "../../../../store/actionCreators/userAC";
import Header from "../../../../types/Header";
import groupAC from "../../../../store/actionCreators/groupAC";

function mapStateToProps(
  state: CombinedState<{
    account: AccountPage;
    header: Header;
  }>
) {
  let savedGroups: SavedItem[] = [];
  if (state.account.user) {
    if (state.account.user.savedGroups) {
      savedGroups = state.account.user.savedGroups;
    }
  }

  return {
    didGet: state.account.user ? true : false,
    groups: savedGroups,
    filtered_groups: state.account.filteredGroups,
    selected_groups: state.account.selectedGroups,
    filter_value: state.account.groupsFilterValue,

    fromDate: state.header.fromDate,
    toDate: state.header.toDate,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updFilter: (value: string) => {},
    getUser: () => {
      dispatch(authAC.getUser());
    },
    selectGroup: (educator: SavedItem) => {
      dispatch(userAC.selectGroup(educator));
    },
    deselectGroup: (educator: SavedItem) => {
      dispatch(userAC.deselectGroup(educator));
    },
    getGroupsTimetable: (groups: SavedItem[], fromDate: Date, toDate: Date) => {
      dispatch(groupAC.getGroupsTimetable(groups, fromDate, toDate));
    },
    removeGroup: (group: SavedItem) => {
      dispatch(userAC.removeGroup(group));
    },
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(SavedGroups);

export default Container;
