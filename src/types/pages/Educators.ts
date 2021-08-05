import Educator from "../Educator";

type Educators = {
	received: boolean;
	filter: string;

	filtered: Educator[];
	selected: Educator[];
};

export default Educators;
