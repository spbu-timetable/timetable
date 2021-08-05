import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import EducationYear from "../../../../../../types/EducationYear";
import SearchList from "../../../../../Reusable/SearchList";

type Props = {
	received: boolean;

	filter: string;
	updFilter: (filterStr: string) => void;

	setProgram: (program: string) => void;

	getStudyLevels: (faculty: string) => void;

	filtered: EducationYear[];

	startLoading: () => void;
	stopLoading: () => void;
};

const EducationYears = (props: Props) => {
	const history = useHistory();
	const location = useLocation();
	const { faculty, program } = useParams<{ faculty: string; program: string }>();

	React.useEffect(() => {
		props.setProgram(`${faculty}-${program}`);
	}, []);

	const get = () => {
		props.getStudyLevels(faculty);
	};

	const next = (year: EducationYear) => {
		history.push(`${location.pathname}/${year.StudyProgramId}`);
	};

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

export default EducationYears;
