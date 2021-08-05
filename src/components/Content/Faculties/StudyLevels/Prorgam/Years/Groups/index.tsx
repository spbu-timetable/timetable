import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

import Group from "../../../../../../../types/Group";
import SearchList from "../../../../../../Reusable/SearchList";

type Props = {
	received: boolean;

	filtered: Group[];
	selected: Group[];

	setProgramID: (programID: string) => void;

	get: (oid: string) => void;
	select: (group: Group) => void;
	deselect: (group: Group) => void;

	filter: string;
	updFilter: (filter: string) => void;

	fromDate: Date;
	toDate: Date;
	getTimetable: (selected_groups: Group[], fromDate?: Date, toDate?: Date) => void;

	startLoading: () => void;
	stopLoading: () => void;
};

const Groups = (props: Props) => {
	const history = useHistory();
	const location = useLocation();
	const { programID } = useParams<{ programID: string }>();

	React.useEffect(() => {
		props.setProgramID(programID);
	}, []);

	const get = () => props.get(programID);

	const next = (groups: string) => {
		props.getTimetable(props.selected, props.fromDate, props.toDate);
		history.push(`${location.pathname}/${groups}`);
	};

	const searchListProps = {
		received: props.received,
		items: props.filtered,
		get: get,

		filter: props.filter,
		updFilter: props.updFilter,

		multipleSelection: true,
		selected: props.selected,
		select: props.select,
		deselect: props.deselect,

		startLoading: props.startLoading,
		stopLoading: props.stopLoading,

		next: next,
	};

	return <SearchList {...searchListProps} />;
};

export default Groups;
