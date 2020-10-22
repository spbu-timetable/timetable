import React from "react";
import Cabinet from "../../../types/Cabinet";

type Props = {
  cabinets: Cabinet[];

  startDate: Date;
  endDate: Date;
};

const List = (props: Props) => {
  return (
    <div>
      <h1>Кабинеты</h1>
      <div>day</div>
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
