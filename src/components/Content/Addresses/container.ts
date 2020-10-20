import { connect } from "react-redux";
import { CombinedState } from "redux";
import Address from ".";
import AddressT from "../../../types/Address";
import Action from "../../../types/Action";
import AddressesPage from "../../../types/AddressesPage";
import addressAC from "../../../store/actionCreators/addressAC";

function mapStateToProps(
  state: CombinedState<{
    addresses: AddressesPage;
  }>
) {
  return {
    didGet: state.addresses.didGet,

    addresses: state.addresses.addresses,
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
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Address);

export default AddressContainer;
