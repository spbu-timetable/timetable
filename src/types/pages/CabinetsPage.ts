import Cabinet from "../Cabinet";

type CabinetsPage = {
  didGet: boolean;
  filter_value: string;

  cabinets: Cabinet[];
  filtered_cabinets: Cabinet[];
  selected_cabinets: Cabinet[];
};

export default CabinetsPage;
