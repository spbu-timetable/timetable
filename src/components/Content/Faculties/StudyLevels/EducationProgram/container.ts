import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import EducationalPrograms from ".";
import StudyLevelT from "../../../../../types/StudyLevel";
import StudyLevelPage from "../../../../../types/pages/StudyLevelPage";
import EducationalProgramPage from "../../../../../types/pages/EducationalProgramPage";
import educationalProgramAC from "../../../../../store/actionCreators/educatyionalProgramAC";
import EducationalProgram from "../../../../../types/EducationalProgram";

function mapStateToProps(
	state: CombinedState<{
		studyLevels: StudyLevelPage;
		educationalPrograms: EducationalProgramPage;
	}>
) {
	return {
		didGet: state.educationalPrograms.didGet,

		selected_studyLevel: state.studyLevels.selected_studyLevel!,
		filter_value: state.educationalPrograms.filter_value,
		educational_programs: state.educationalPrograms.ed_programs,
		filtered_educational_programs: state.educationalPrograms.filtered_ed_programs,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getEducationalPrograms: (selected_studyLevel: StudyLevelT | undefined) => {
			dispatch(educationalProgramAC.getEducationalPrograms(selected_studyLevel!));
		},
		setEducationalProgram: (educationalProgram: EducationalProgram) => {
			dispatch(educationalProgramAC.setEducationalProgram(educationalProgram));
		},
		updFilter: (filterStr: string) => {
			dispatch(educationalProgramAC.updFilter(filterStr));
		},
		cleanEducationalPrograms: () => {
			dispatch(educationalProgramAC.cleanEducationalPrograms());
		},
	};
}

const EducationalProgramContainer = connect(mapStateToProps, mapDispatchToProps)(EducationalPrograms);

export default EducationalProgramContainer;
