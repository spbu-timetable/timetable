import { connect } from "react-redux";
import { CombinedState } from "redux";
import TimetableList from ".";
import cabinetAC from "../../../../store/actionCreators/cabinetAC";
import Action from "../../../../types/Action";
import CabinetsPage from "../../../../types/pages/CabinetsPage";
import Header from "../../../../types/Header";

function mapStateToProps(
  state: CombinedState<{
    header: Header;
    cabinets: CabinetsPage;
  }>
) {
  return {
    selected_cabinets: state.cabinets.selected_cabinets,
    fromDate: state.header.fromDate,
    toDate: state.header.toDate,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(TimetableList);

export default CabinetsContainer;
