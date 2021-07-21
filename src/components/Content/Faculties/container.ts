import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Faculty from ".";
import FacultyT from "../../../types/Faculty";
import FacultiesPage from "../../../types/pages/FacultiesPage";
import facultyAC from "../../../store/actionCreators/facultyAC";

function mapStateToProps(
	state: CombinedState<{
		faculties: FacultiesPage;
	}>
) {
	return {
		didGet: state.faculties.didGet,
		filter_value: state.faculties.filter_value,

		faculties: state.faculties.faculties,
		filtered_faculties: state.faculties.filtered,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getFaculties: () => {
			dispatch(facultyAC.getFaculties());
		},
		setFaculty: (faculty: FacultyT) => {
			dispatch(facultyAC.setFaculty(faculty));
		},
		updFilter: (filterStr: string) => {
			dispatch(facultyAC.updFilter(filterStr));
		},
	};
}

const FacultyContainer = connect(mapStateToProps, mapDispatchToProps)(Faculty);

export default FacultyContainer;
