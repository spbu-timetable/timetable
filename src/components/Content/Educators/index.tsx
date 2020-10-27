import React from "react";
import SearchListPage from "../../../hocs/SearchListPage";
import Educator from "../../../types/Educator";

type Props = {
  didGet: boolean;
  filter_value: string;
  filtered_educators: Educator[];

  setEducator: (educator: Educator) => void;
  updFilter: (filter_value: string) => void;
  updFilterValue: (filter_value: string) => void;
};

const Educators = (props: Props) => {
  return (
    <>
      <SearchListPage
        didGet={props.didGet}
        filtered_items={props.filtered_educators}
        filter_value={props.filter_value}
        setItem={props.setEducator}
        updFilter={props.updFilter}
        updFilterValue={props.updFilterValue}
      />
    </>
  );
};

export default Educators;
