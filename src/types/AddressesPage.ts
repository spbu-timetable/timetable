import Address from "./Address";

type AddressesPage = {
  didGet: boolean;
  addresses: Address[];
  selected_address?: Address;
};

export default AddressesPage;
