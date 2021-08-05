import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import Programs from "../../../../../types/pages/Programs";
import programs from "../../../../../store/ac/programs";
import app from "../../../../../store/ac/app";

const mapStateToProps = (state: CombinedState<{ programs: Programs }>) => {
	return {
		filter: state.programs.filter,

		received: state.programs.received.get(state.programs.level) || false,
		filtered: state.programs.filtered.get(state.programs.level) || [],
	};
};

const mapDispatchToProps = (dispatch: (action: AnyAction) => void) => {
	return {
		get: (faculty: string, level: string) => {
			dispatch(programs.get(faculty, level));
		},

		setLevel: (level: string) => {
			dispatch(programs.setLevel(level));
		},

		updFilter: (filterStr: string) => {
			dispatch(programs.updFilter(filterStr));
		},

		startLoading: () => {
			dispatch(app.startLoading());
		},

		stopLoading: () => {
			dispatch(app.stopLoading());
		},
	};
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export default Container;
