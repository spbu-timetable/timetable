import { AnyAction, CombinedState } from "redux";

import Cabinets from ".";
import AddressesPage from "../../../../types/pages/AddressesPage";
import { connect } from "react-redux";
import cabinets from "../../../../store/actionCreators/cabinets";
import Cabinet from "../../../../types/Cabinet";
import CabinetsPage from "../../../../types/pages/CabinetsPage";
import Header from "../../../../types/Header";
import app from "../../../../store/actionCreators/app";

function mapStateToProps(
	state: CombinedState<{
		header: Header;
		addresses: AddressesPage;
		cabinets: CabinetsPage;
	}>
) {
	return {
		filterValue: state.cabinets.filterValue,

		received: state.cabinets.received.get(state.cabinets.addressID) || false,
		filtered: state.cabinets.filtered,
		selected: state.cabinets.selected,

		fromDate: state.header.fromDate,
		toDate: state.header.toDate,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		setAddressID: (id: string) => {
			dispatch(cabinets.setAddressID(id));
		},

		get: (oid: string | undefined) => {
			dispatch(cabinets.get(oid!));
		},

		select: (cabinet: Cabinet) => {
			dispatch(cabinets.select(cabinet));
		},

		deselect: (cabinet: Cabinet) => {
			dispatch(cabinets.deselect(cabinet));
		},

		updFilter: (filter: string, address: string) => {
			dispatch(cabinets.updFilter(filter, address));
		},

		getTimetable: (selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date) => {
			dispatch(cabinets.getTimetable(selected_cabinets, fromDate, toDate));
		},

		startLoading: () => {
			dispatch(app.setLoader());
		},

		stopLoading: () => {
			dispatch(app.stopLoader());
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Cabinets);

export default Container;
