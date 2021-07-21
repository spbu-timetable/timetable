import Address from "../Address";

type AddressesPage = {
  received: boolean;
  filterValue: string;

  addresses: Address[];
  filtered: Address[];
  selected?: Address;
};

export default AddressesPage;
