import React from "react";
import header from "../../../store/header";
import faculties from "../../../store/faculties";

import SearchList from "../../Reusable/SearchList";

import { useHistory, useLocation } from "react-router-dom";

const Faculties = () => {
	const history = useHistory();
	const location = useLocation();

	const updFilter = (filter: string) => (faculties.filter = filter);
	const next = (faculty: string) => {
		history.push(`${location.pathname}/${faculty}`);
	};

	const searchListProps = {
		received: faculties.received,
		items: faculties.filtered,
		get: faculties.get,

		filter: faculties.filter,
		updFilter: updFilter,

		startLoading: header.startLoading,
		stopLoading: header.stopLoading,

		next: next,
	};

	return <SearchList {...searchListProps} />;
};

export default Faculties;
