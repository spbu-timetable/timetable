import React from "react";

import addresses from "../../../store/addresses";
import header from "../../../store/header";
import SearchList from "../../Reusable/SearchList";
import { useHistory, useLocation } from "react-router-dom";
import Address from "../../../types/Address";
import { observer } from "mobx-react-lite";

const Addresses = observer(() => {
	const history = useHistory();
	const location = useLocation();

	const goNext = (address: Address) => {
		history.push(`${location.pathname}/${address.Oid}`);
	};

	return (
		<SearchList
			received={addresses.received}
			items={addresses.filtered}
			get={addresses.get}
			next={goNext}
			filter={addresses.filter}
			updFilter={addresses.updFilter}
			startLoading={header.startLoading}
			stopLoading={header.stopLoading}
		/>
	);
});

export default Addresses;
