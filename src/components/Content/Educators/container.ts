import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Educators from ".";
import app from "../../../store/actionCreators/app";
import educators from "../../../store/actionCreators/educatorAC";
import Educator from "../../../types/Educator";
import Header from "../../../types/Header";
import EducatorsPage from "../../../types/pages/EducatorsPage";

function mapStateToProps(
	state: CombinedState<{
		header: Header;
		educators: EducatorsPage;
	}>
) {
	return {
		received: state.educators.received,
		filter: state.educators.filter,
		filtered: state.educators.filtered,
		selected: state.educators.selected,

		fromDate: state.header.fromDate,
		toDate: state.header.toDate,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		select: (educator: Educator) => {
			dispatch(educators.select(educator));
		},

		deselect: (educator: Educator) => {
			dispatch(educators.deselect(educator));
		},

		get: (filter_value: string) => {
			dispatch(educators.get(filter_value));
		},

		updFilter: (filterStr: string) => {
			dispatch(educators.updFilter(filterStr));
		},

		getTimetable: (selected_educators: Educator[], fromDate?: Date, toDate?: Date) => {
			dispatch(educators.getTimetable(selected_educators, fromDate!, toDate!));
		},
		
		startLoading: () => {
			dispatch(app.setLoader());
		},

		stopLoading: () => {
			dispatch(app.stopLoader());
		},
	};
}

const EducatorsContainer = connect(mapStateToProps, mapDispatchToProps)(Educators);

export default EducatorsContainer;
