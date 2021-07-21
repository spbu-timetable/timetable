import React from "react";

import { useHistory, useLocation, useParams } from "react-router-dom";

import Cabinet from "../../../../types/Cabinet";
import SearchList from "../../../Reusable/SearchList";

type Props = {
	received: boolean;
	filterValue: string;

	startLoading: () => void;
	stopLoading: () => void;

	filtered: Cabinet[];
	selected: Cabinet[];

	setAddressID: (id: string) => void;
	get: (oid: string | undefined) => void;
	select: (cabinet: Cabinet) => void;
	deselect: (cabinet: Cabinet) => void;
	updFilter: (filter: string, address: string) => void;

	fromDate: Date;
	toDate: Date;
	getTimetable: (selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date) => void;
};

const Cabinets: React.FC<Props> = (props: Props) => {
	const history = useHistory();
	const location = useLocation();
	const { addressID } = useParams<{ addressID: string; cabinets: string }>();
	props.setAddressID(addressID);

	const getItems = () => props.get(addressID);
	const updFilter = (filter: string) => props.updFilter(filter, addressID);
	const goNext = (cabinets: string) => {
		history.push(`${location.pathname}/${cabinets}`);
		props.getTimetable(props.selected, props.fromDate, props.toDate);
	};

	return (
		<SearchList
			received={props.received}
			filter={props.filterValue}
			updFilter={updFilter}
			items={props.filtered}
			get={getItems}
			startLoading={props.startLoading}
			stopLoading={props.stopLoading}
			multipleSelection={true}
			selectedItems={props.selected}
			select={props.select}
			deselect={props.deselect}
			goNext={goNext}
		/>
	);
};

export default Cabinets;
