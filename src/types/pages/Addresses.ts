import Address from "../Address";

type Addresses = {
	received: boolean;
	filter: string;

	items: Address[];
	filtered: Address[];
};

export default Addresses;
