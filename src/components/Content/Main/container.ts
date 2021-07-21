import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import AddressesPage from "../../../types/pages/AddressesPage";
import addresses from "../../../store/actionCreators/addresses";
import app from "../../../store/actionCreators/app";

function mapStateToProps(
	state: CombinedState<{
		addresses: AddressesPage;
	}>
) {
	return {};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getAddresses: () => {
			dispatch(addresses.get());
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
