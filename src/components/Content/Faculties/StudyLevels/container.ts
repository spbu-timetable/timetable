import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import StudyLevel from ".";
import StudyLevelT from "../../../../types/StudyLevel";
import StudyLevels from "../../../../types/pages/StudyLevels";
import StudyLevelAC from "../../../../store/ac/studyLevels";
import Faculties from "../../../../types/pages/Faculties";

function mapStateToProps(
	state: CombinedState<{
		faculties: Faculties;
		studyLevels: StudyLevels;
	}>
) {
	return {
		oid: state.faculties.selected!.Alias,
		didGet: state.studyLevels.received,
		filter_value: state.studyLevels.filter,
		studyLevels: state.studyLevels.levels,
		filtered_studyLevels: state.studyLevels.filtered,
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
