import React from "react";
import Educator from "../../../types/Educator";
import Search from "../../Reusable/Search";

type Props = {
  filter_value: string;
  filtered_educators: Educator[];

  updFilter: (filter_value: string) => void;
};

const Educators = (props: Props) => {
  return (
    <div>
      <Search value={props.filter_value} updFilter={props.updFilter} />
    </div>
  );
};

export default Educators;
