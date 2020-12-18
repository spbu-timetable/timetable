import { connect } from "react-redux";
import { CombinedState } from "redux";
import App from ".";
import appAC from "../../store/actionCreators/appAC";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";

function mapStateToProps(state: CombinedState<{ app: AppPage }>) {
  return {
    isAlert: state.app.isAlert,
    alert: state.app.alert!,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    cleanAlert: () => {
      dispatch(appAC.cleanAlert());
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
