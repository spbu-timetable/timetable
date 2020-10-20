import AddressLocalStorage from "../../localStorage/address";
import AddressesPage from "../../types/AddressesPage";

const addresses: AddressesPage = {
  didGet: false,
  addresses: [],

  selected_address: AddressLocalStorage.set(),
};

export default addresses;
