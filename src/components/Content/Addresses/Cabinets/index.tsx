import React from "react";
import header from "../../../../store/header";
import cabinets from "../../../../store/cabinets";

import { useHistory, useLocation, useParams } from "react-router-dom";

import SearchList from "../../../Reusable/SearchList";

const Cabinets = () => {
	const history = useHistory();
	const location = useLocation();
	const { addressID } = useParams<{ addressID: string; cabinets: string }>();
	cabinets.addressID = addressID;

	const get = () => cabinets.get();
	const goNext = (_cabinets: string) => {
		history.push(`${location.pathname}/${_cabinets}`);
		cabinets.getTimetable(header.fromDate, header.toDate);
	};

	return (
		<SearchList
			received={cabinets.received.get(addressID) || false}
			filter={cabinets.filter}
			updFilter={cabinets.updFilter}
			items={cabinets.filtered}
			get={get}
			startLoading={header.startLoading}
			stopLoading={header.stopLoading}
			multipleSelection={true}
			selected={cabinets.selected}
			select={cabinets.select}
			deselect={cabinets.deselect}
			next={goNext}
		/>
	);
};

export default Cabinets;
