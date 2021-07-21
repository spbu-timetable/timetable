import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Educator from "../../../types/Educator";
import SearchList from "../../Reusable/SearchList";

type Props = {
	received: boolean;

	filter: string;
	selected: Educator[];
	filtered: Educator[];

	select: (educator: Educator) => void;
	deselect: (educator: Educator) => void;
	get: (filter_value: string) => void;
	updFilter: (filter_value: string) => void;

	fromDate: Date;
	toDate: Date;
	getTimetable: (selected_educators: Educator[], fromDate?: Date, toDate?: Date) => void;

	startLoading: () => void;
	stopLoading: () => void;
};

const Educators = (props: Props) => {
	const history = useHistory();
	const location = useLocation();

	const updFilter = (filter: string) => {
		props.updFilter(filter);
		props.get(filter);
	};

	const goNext = (educators: string) => {
		history.push(`${location.pathname}/${educators}`);
		props.getTimetable(props.selected, props.fromDate, props.toDate);
	};

	return (
		<SearchList
			received={props.received}
			items={props.filtered}
			get={() => {}}
			filter={props.filter}
			updFilter={updFilter}
			multipleSelection
			selectedItems={props.selected}
			select={props.select}
			deselect={props.deselect}
			goNext={goNext}
			startLoading={props.startLoading}
			stopLoading={props.stopLoading}
		/>
	);
};

export default Educators;
