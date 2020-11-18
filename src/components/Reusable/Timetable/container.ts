import { connect } from "react-redux";
import { CombinedState } from "redux";
import TimetableList from ".";
import Action from "../../../types/Action";
import CabinetsPage from "../../../types/pages/CabinetsPage";
import Header from "../../../types/Header";
import TimetablePage from "../../../types/pages/TimetablePage";

function mapStateToProps(
  state: CombinedState<{
    timetable: TimetablePage;
  }>
) {
  return {
    didGet: state.timetable.didGet,
    items: state.timetable.items,
    timetable: state.timetable.timetable,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const CabinetsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimetableList);

export default CabinetsContainer;
