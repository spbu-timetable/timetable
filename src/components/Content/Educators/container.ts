import { connect } from "react-redux";
import { CombinedState } from "redux";
import Educators from ".";
import educatorAC from "../../../store/actionCreators/educatorAC";
import Action from "../../../types/Action";
import EducatorsPage from "../../../types/pages/EducatorsPage";

function mapStateToProps(
  state: CombinedState<{
    educators: EducatorsPage;
  }>
) {
  return {
    filter_value: state.educators.filter_value,
    filtered_educators: state.educators.filtered_educators,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    updFilter: (filter_value: string) => {
      dispatch(educatorAC.updFilter(filter_value));
    },
  };
}

const EducatorsContainer = connect(mapStateToProps, mapDispatchToProps)(Educators);

export default EducatorsContainer;
