import React from "react";
import SearchListPage from "../../../Reusable/SearchListPage";

type Props = {
  cabinets: string[];
  filtered_cabinets: string[];

  filter_value: string;

  updFilter: (value: string) => void;
};

const SavedCabinets = (props: Props) => {
  return (
    <SearchListPage
      items={props.cabinets}
      filtered_items={props.filtered_cabinets}
      filter_value={props.filter_value}
      updFilter={props.updFilter}
    />
  );
};

export default SavedCabinets;
