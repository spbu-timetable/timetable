enum ACTION {
	SET_HEADER_BUTTON_TITLE = "SET_HEADER_BUTTON_TITLE",
	SET_WEEK = "SET_WEEK",
	SET_LANG = "SET_LANG",

	GET_ADDRESSES = "GET_ADRESSES",
	SET_ADDRESSES = "SET_ADDRESSES",
	SET_ADDRESS = "SET_ADDRESS",
	FILTER_ADDRESSES = "FILTER_ADDRESSES",

	GET_FACULTIES = "GET_FACULTIES",
	SET_FACULTIES = "SET_FACULTIES",
	SET_FACULTY = "SET_FACULTY",
	FILTER_FACULTIES = "FILTER_FACULTIES",

	GET_STUDYLEVELS = "GET_STUDYLEVELS",
	SET_STUDYLEVELS = "SET_STUDYLEVELS",
	SET_STUDYLEVEL = "SET_STUDYLEVEL",
	FILTER_STUDYLEVELS = "FILTER_STUDYLEVELS",
	CLEAN_STUDYLEVELS = "CLEAN_STUDYLEVELS",

	GET_PROGRAMS = "GET_PROGRAMS",
	SET_EDUCATIONAL_PROGRAMS = "SET_EDUCTIONALPROGRAMS",
	SET_EDUCTIONALPROGRAM = "SET_EDUCTIONALPROGRAM",
	FILTER_PROGRAMS = "FILTER_EDUCTIONALPROGRAMS",
	CLEAN_EDUCATIONALPROGRAMS = "CLEAN_EDUCATIONALPROGRAMS",

	GET_EDUCATIONYEARS = "GET_EDUCATIONYEARS",
	SET_YEARS = "SET_EDUCATIONYEARS",
	SET_EDUCATIONYEAR = "SET_EDUCATIONYEAR",
	FILTER_YEARS = "FILTER_EDUCATIONYEARS",

	GET_CABINETS = "GET_CABINETS",
	SET_CABINETS = "SET_CABINETS",
	SELECT_CABINET = "SELECT_CABINET",
	DESELECT_CABINET = "DESELECT_CABINET",
	FILTER_CABINETS = "FILTER_CABINETS",
	CLEAN_CABINETS = "CLEAN_CABINETS",
	GET_CABINETS_TIMETABLE = "GET_CABINETS_TIMETABLE",
	SET_CABINETS_TIMETABLE = "SET_CABINETS_TIMETABLE",

	GET_GROUPS = "GET_GROUPS",
	SET_GROUPS = "SET_GROUPS",
	SELECT_GROUP = "SELECT_GROUP",
	DESELECT_GROUP = "DESELECT_GROUP",
	FILTER_GROUPS = "FILTER_GROUPS",
	CLEAN_GROUPS = "CLEAN_GROUPS",
	GET_GROUPS_TIMETABLE = "GET_GROUPS_TIMETABLE",
	SET_GROUPS_TIMETABLE = "SET_GROUPS_TIMETABLE",

	SELECT_EDUCATOR = "SET_EDUCATOR",
	DESELECT_EDUCATOR = "DESELECT_EDUCATOR",
	SET_EDUCATORS = "SET_EDUCATORS",
	UPD_FILTER_VALUE = "UPD_FILTER_VALUE",
	FILTER_EDUCATORS = "FILTER_EDUCATORS",
	GET_EDUCATORS_TIMETABLE = "GET_EDUCATORS_TIMETABLE",
	SET_EDUCATORS_TIMETABLE = "SET_EDUCATORS_TIMETABLE",

	SET_TIMETABLE = "SET_TIMETABLE",
	CLEAN_TIMETABLE = "CLEAN_TIMETABLE",
	SET_TIMETABLE_ITEMS = "SET_TIMETABLE_ITEMS",
	FINISH_FETCHING_TIMETABLE = "FINISH_FETCHING_TIMETABLE",
	CREATE_TIME_INTERVALS = "CREATE_TIME_INTERVALS",
	SET_LOADING = "SET_LOADER",
	STOP_LOADING = "STOP_LOADER",
	SET_LAYOUT = "SET_LAYOUT",
	SET_ADDRESS_ID = "SET_ADDRESS_ID",
	SET_FACULTY_ALIAS = "SET_FACULTY_ALIAS",
	SET_LEVEL = "SET_LEVEL",
	SET_PROGRAM = "SET_PROGRAM",
	SET_PROGRAM_ID = "SET_PROGRAM_ID",
	GET_YEARS = "GET_YEARS",
}

export default ACTION;