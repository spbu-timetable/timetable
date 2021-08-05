import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import EducationalProgram from "../../../../../../types/Program";
import Years from "../../../../../../types/pages/EducationYears";
import Programs from "../../../../../../types/pages/Programs";
import years from "../../../../../../store/ac/years";
import app from "../../../../../../store/ac/app";
import studyLevels from "../../../../../../store/ac/studyLevels";

function mapStateToProps(
	state: CombinedState<{
		programs: Programs;
		years: Years;
	}>
) {
	return {
		received: state.years.received.get(state.years.program) || false,

		filter: state.years.filter,
		filtered: state.years.filtered.get(state.years.program) || [],
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getStudyLevels: (facultyAlias: string) => {
			dispatch(studyLevels.get(facultyAlias));
		},

		updFilter: (filter: string) => {
			dispatch(years.updFilter(filter));
		},

		setProgram: (program: string) => {
			dispatch(years.setProgram(program));
		},

		startLoading: () => {
			dispatch(app.startLoading());
		},

		stopLoading: () => {
			dispatch(app.stopLoading());
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
