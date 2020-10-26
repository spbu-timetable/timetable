import { connect } from "react-redux";
import { CombinedState } from "redux";
import Faculty from ".";
import FacultyT from "../../../types/Faculty";
import Action from "../../../types/Action";
import FacultiesPage from "../../../types/pages/FacultiesPage";
import facultyAC from "../../../store/actionCreators/facultyAC";

function mapStateToProps(
  state: CombinedState<{
    faculties: FacultiesPage;
  }>
) {
  console.log('container' + state.faculties)
  return {
    didGet: state.faculties.didGet,
    filter_value: state.faculties.filter_value,

    faculties: state.faculties.faculties,
    filtered_faculties: state.faculties.filtered_faculties,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getFaculties: () => {
      console.log('container')
      dispatch(facultyAC.getFaculties());
    },
    setFaculty: (faculty: FacultyT) => {
      dispatch(facultyAC.setFaculty(faculty));
    },
    updFilter: (filterStr: string) => {
      dispatch(facultyAC.updFilter(filterStr));
    },
    // cleanState: () => {
    //   dispatch(facultyAC.setFaculty)
    // }
  };
}

const FacultyContainer = connect(mapStateToProps, mapDispatchToProps)(Faculty);

export default FacultyContainer;
