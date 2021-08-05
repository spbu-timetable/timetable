import Faculty from "../Faculty";

type Faculties = {
	received: boolean;
	filter: string;

	items: Faculty[];
	filtered: Faculty[];
};

export default Faculties;
