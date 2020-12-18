import { CombinedState } from "redux";
import { connect } from "react-redux";

import Cabinets from ".";

import AccountPage from "../../../../types/pages/AccountPage";
import Action from "../../../../types/Action";
import authAC from "../../../../store/actionCreators/authAC";
import { SavedItem } from "../../../../types/User";
import userAC from "../../../../store/actionCreators/userAC";
import Header from "../../../../types/Header";
import cabinetAC from "../../../../store/actionCreators/cabinetAC";

function mapStateToProps(
  state: CombinedState<{
    account: AccountPage;
    header: Header;
  }>
) {
  let savedCabinets: SavedItem[] = [];
  if (state.account.user) {
    if (state.account.user.savedCabinets) {
      savedCabinets = state.account.user.savedCabinets;
    }
  }

  return {
    didGet: state.account.user ? true : false,
    cabinets: savedCabinets,
    filtered_cabinets: state.account.filteredCabinets,
    selected_cabinets: state.account.selectedCabinets,
    filter_value: state.account.cabinetsFilterValue,

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
    selectCabinet: (cabinet: SavedItem) => {
      dispatch(userAC.selectCabinet(cabinet));
    },
    deselectCabinet: (cabinet: SavedItem) => {
      dispatch(userAC.deselectCabinet(cabinet));
    },
    getCabinetsTimetable: (cabinets: SavedItem[], fromDate?: Date, toDate?: Date) => {
      dispatch(cabinetAC.getCabinetTimetable(cabinets, fromDate, toDate));
    },
  };
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(Cabinets);

export default CabinetsContainer;
