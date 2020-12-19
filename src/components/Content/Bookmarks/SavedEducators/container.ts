import { CombinedState } from "redux";
import { connect } from "react-redux";

import SavedEducators from ".";

import AccountPage from "../../../../types/pages/AccountPage";
import Action from "../../../../types/Action";
import authAC from "../../../../store/actionCreators/authAC";
import { SavedItem } from "../../../../types/User";
import userAC from "../../../../store/actionCreators/userAC";
import Header from "../../../../types/Header";
import cabinetAC from "../../../../store/actionCreators/cabinetAC";
import educatorAC from "../../../../store/actionCreators/educatorAC";

function mapStateToProps(
  state: CombinedState<{
    account: AccountPage;
    header: Header;
  }>
) {
  let savedEducators: SavedItem[] = [];
  if (state.account.user) {
    if (state.account.user.savedEducators) {
      savedEducators = state.account.user.savedEducators;
    }
  }

  return {
    didGet: state.account.user ? true : false,
    educators: savedEducators,
    filtered_educators: state.account.filteredEducators,
    selected_educators: state.account.selectedEducators,
    filter_value: state.account.educatorsFilterValue,

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
    selectEducator: (educator: SavedItem) => {
      dispatch(userAC.selectEducator(educator));
    },
    deselectEducator: (educator: SavedItem) => {
      dispatch(userAC.deselectEducator(educator));
    },
    getEducatorsTimetable: (educators: SavedItem[], fromDate: Date, toDate: Date) => {
      dispatch(educatorAC.getEducatorTimetable(educators, fromDate, toDate));
    },
    removeEducator: (educator: SavedItem) => {
      dispatch(userAC.removeEducator(educator));
    },
  };
}

const SavedEducatorsContainer = connect(mapStateToProps, mapDispatchToProps)(SavedEducators);

export default SavedEducatorsContainer;
