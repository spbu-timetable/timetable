import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import StudyLevel from ".";
import StudyLevelT from "../../../../types/StudyLevel";
import StudyLevelPage from "../../../../types/pages/StudyLevelPage";
import StudyLevelAC from "../../../../store/actionCreators/studyLevelAC";
import FacultiesPage from "../../../../types/pages/FacultiesPage";

function mapStateToProps(
	state: CombinedState<{
		faculties: FacultiesPage;
		studyLevels: StudyLevelPage;
	}>
) {
	return {
		oid: state.faculties.selected_faculty!.Alias,
		didGet: state.studyLevels.didGet,
		filter_value: state.studyLevels.filter_value,
		studyLevels: state.studyLevels.studyLevels,
		filtered_studyLevels: state.studyLevels.filtered_studyLevels,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getStudyLevels: (oid: string | undefined) => {
			dispatch(StudyLevelAC.getStudyLevels(oid!));
		},
		setStudyLevel: (studyLevel: StudyLevelT) => {
			dispatch(StudyLevelAC.setStudyLevel(studyLevel));
		},
		updFilter: (filterStr: string) => {
			dispatch(StudyLevelAC.updFilter(filterStr));
		},
		cleanStudyLevels: () => {
			dispatch(StudyLevelAC.cleanStudyLevels());
		},
	};
}

const StudyLevelContainer = connect(mapStateToProps, mapDispatchToProps)(StudyLevel);

export default StudyLevelContainer;
