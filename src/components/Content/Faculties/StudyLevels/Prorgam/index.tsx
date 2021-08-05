import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import EducationalProgram from "../../../../../types/Program";

import SearchList from "../../../../Reusable/SearchList";

type Props = {
	filter: string;
	updFilter: (filterStr: string) => void;

	received: boolean;
	filtered: EducationalProgram[];
	get: (faculty: string, level: string) => void;
	setLevel: (level: string) => void;

	startLoading: () => void;
	stopLoading: () => void;
};

const EducationalPrograms = (props: Props) => {
	const history = useHistory();
	const location = useLocation();
	const { faculty, level } = useParams<{ faculty: string; level: string }>();

	React.useEffect(() => {
		props.setLevel(level);
	}, []);

	const get = () => props.get(faculty, level);

	const next = (program: EducationalProgram) => history.push(`${location.pathname}/${program.Name}`);

	const searchListProps = {
		received: props.received,
		items: props.filtered,
		get: get,
		filter: props.filter,
		updFilter: props.updFilter,
		startLoading: props.startLoading,
		stopLoading: props.stopLoading,
		next: next,
	};

	return <SearchList {...searchListProps} />;
};

export default EducationalPrograms;
