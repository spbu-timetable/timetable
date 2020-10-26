import { connect } from "react-redux";
import { CombinedState } from "redux";
import Address from ".";
import AddressT from "../../../types/Address";
import Action from "../../../types/Action";
import AddressesPage from "../../../types/pages/AddressesPage";
import addressAC from "../../../store/actionCreators/addressAC";

function mapStateToProps(
  state: CombinedState<{
    addresses: AddressesPage;
  }>
) {
  return {
    didGet: state.addresses.didGet,
    filter_value: state.addresses.filter_value,

    addresses: state.addresses.addresses,
    filtered_addresses: state.addresses.filtered_addresses,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getAddresses: () => {
      dispatch(addressAC.getAddresses());
    },
    setAddress: (address: AddressT) => {
      dispatch(addressAC.setAddress(address));
    },
    updFilter: (filterStr: string) => {
      dispatch(addressAC.updFilter(filterStr));
    },
    // cleanState: () => {
    //   dispatch(addressAC.setAddress)
    // }
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Address);

export default AddressContainer;
