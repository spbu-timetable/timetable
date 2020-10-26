import Address from "../Address";

type AddressesPage = {
  didGet: boolean;
  filter_value: string;

  addresses: Address[];
  filtered_addresses: Address[];
  selected_address?: Address;
};

export default AddressesPage;
