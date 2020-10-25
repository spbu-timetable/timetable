import AddressLocalStorage from "../../localStorage/address";
import AddressesPage from "../../types/AddressesPage";

const addresses: AddressesPage = {
  didGet: false,
  filter_value: "",

  addresses: [],
  filtered_addresses: [],

  selected_address: AddressLocalStorage.set(),
};

export default addresses;
