import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import App from "../../types/pages/App";
import Component from ".";

function mapStateToProps(state: CombinedState<{ app: App }>) {
	return { isLoader: state.app.isLoader };
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
