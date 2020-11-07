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
  return {};
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const TimetableContainer = connect(mapStateToProps, mapDispatchToProps)(Timetable);

export default TimetableContainer;
