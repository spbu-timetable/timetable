import React from "react";

import Address from "../../../types/Address";
import SearchList from "../../Reusable/SearchList";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
	received: boolean;
	filtered: Address[];
	filterValue: string;

	startLoading: () => void;
	stopLoading: () => void;

	get: () => void;
	updFilter: (filterStr: string) => void;
};

const Addresses = (props: Props) => {
	const history = useHistory();
	const location = useLocation();

	const goNext = (address: Address) => {
		history.push(`${location.pathname}/${address.Oid}`);
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
