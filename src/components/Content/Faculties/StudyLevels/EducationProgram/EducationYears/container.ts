import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import EducationYears from ".";
import EducationalProgram from "../../../../../../types/EducationalProgram";
import EducationYearsPage from "../../../../../../types/pages/EducationYearsPage";
import EducationalProgramPage from "../../../../../../types/pages/EducationalProgramPage";
import educationYearAC from "../../../../../../store/actionCreators/educationYearAC";
import EducationYear from "../../../../../../types/EducationYear";

function mapStateToProps(
	state: CombinedState<{
		educationalPrograms: EducationalProgramPage;
		educationYears: EducationYearsPage;
	}>
) {
	return {
		didGet: state.educationYears.didGet,

		selected_ed_program: state.educationalPrograms.selected!,
		filter_value: state.educationYears.filter_value,
		ed_years: state.educationYears.years,
		filtered_ed_years: state.educationYears.filtered,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getEducationYears: (selected_ed_program: EducationalProgram | undefined) => {
			dispatch(educationYearAC.getEducationYears(selected_ed_program!));
		},
		setEducationYear: (educationYear: EducationYear) => {
			dispatch(educationYearAC.setEducationYear(educationYear));
		},
		updFilter: (filterStr: string) => {
			dispatch(educationYearAC.updFilter(filterStr));
		},
		// cleanState: () => {
		//   dispatch(facultyAC.setFaculty)
		// }
	};
}

const EducationYearContainer = connect(mapStateToProps, mapDispatchToProps)(EducationYears);

export default EducationYearContainer;
