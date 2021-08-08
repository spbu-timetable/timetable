import React from "react";
import header from "../../../store/header";
import educators from "../../../store/educators";

import { useHistory, useLocation } from "react-router-dom";
import SearchList from "../../Reusable/SearchList";

const Educators = () => {
	const history = useHistory();
	const location = useLocation();

	const updFilter = (filter: string) => {
		educators.filter = filter;
		educators.get();
	};

	const goNext = (_educators: string) => {
		history.push(`${location.pathname}/${_educators}`);
		educators.getTimetable(header.fromDate, header.toDate);
	};

	return (
		<SearchList
			received={educators.received}
			items={educators.filtered}
			get={() => {}}
			filter={educators.filter}
			updFilter={updFilter}
			multipleSelection
			selected={educators.selected}
			select={educators.select}
			deselect={educators.deselect}
			next={goNext}
			startLoading={header.startLoading}
			stopLoading={header.stopLoading}
		/>
	);
};

export default Educators;
