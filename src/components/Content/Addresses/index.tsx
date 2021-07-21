import React from "react";

import Address from "../../../types/Address";
import getObjectID from "../../../helpers/getObjectID";
import SearchList from "../../Reusable/SearchList";
import { useHistory } from "react-router-dom";

type Props = {
	received: boolean;
	filtered: Address[];
	filterValue: string;

	startLoading: () => void;
	stopLoading: () => void;

	get: () => void;
	set: (address: Address) => void;
	setAddressID: (id: string) => void;
	updFilter: (filterStr: string) => void;
};

const Addresses = (props: Props) => {
	const history = useHistory();

	const goNext = (address: Address) => {
		props.setAddressID(getObjectID(address));
		props.set(address);
		history.push(`/addresses/${address.Oid}`);
	};

	return (
		<SearchList
			received={props.received}
			items={props.filtered}
			get={props.get}
			goNext={goNext}
			filter={props.filterValue}
			updFilter={props.updFilter}
			startLoading={props.startLoading}
			stopLoading={props.stopLoading}
		/>
	);
};

export default Addresses;
