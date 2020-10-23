import Cabinet from "./Cabinet";

type CabinetsPage = {
  didGet: boolean;
  cabinets: Cabinet[];
  selected_cabinets: Cabinet[];

  timetable: String[][];
};

export default CabinetsPage;
