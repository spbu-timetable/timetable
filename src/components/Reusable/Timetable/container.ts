import { connect } from "react-redux";
import { CombinedState } from "redux";
import Timetable from ".";
import Action from "../../../types/Action";
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
    headers: state.timetable.headers,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(Timetable);

export default CabinetsContainer;
