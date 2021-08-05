import Educator from "../../../types/Educator";
import Educators from "../../../types/pages/Educators";

const set = (educators: Educator[], state: Educators): Educators => {
	return {
		...state,
		received: true,
		filtered: educators,
	};
};

export default set;
