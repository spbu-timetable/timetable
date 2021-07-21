import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import app from "../../store/actionCreators/app";

function mapStateToProps(state: CombinedState<{}>) {
	return {};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		setLayout: (isMobile: boolean) => {
			dispatch(app.setLayout(isMobile));
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
