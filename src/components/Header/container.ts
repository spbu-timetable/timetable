import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import header from "../../store/actionCreators/headerAC";
import Header from "../../types/Header";

function mapStateToProps(
	state: CombinedState<{
		header: Header;
	}>
) {
	return {
		week: state.header.week.toDateString(),

		fromDateStr: state.header.fromDateStr,
		toDateStr: state.header.toDateStr,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		setWeek: (date: Date) => {
			dispatch(header.setWeek(date));
		},
		setLang: (isRussian: boolean) => {
			dispatch(header.setLang(isRussian));
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
