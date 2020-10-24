import React from "react";
import style from "./style.module.css";

import Cabinet from "../../../types/Cabinet";

import SelectedCabinets from "./SelectedCabinets";
import CabinetsList from "./CabinetsList";

type Props = {
  oid: string;
  didGet: boolean;
  cabinets: Cabinet[];
  selected_cabinets: Cabinet[];

  getCabinets: (oid: string) => void;
  selectCabinet: (cabinet: Cabinet) => void;
  deselectCabinet: (oid: string) => void;
};

const Cabinets = (props: Props) => {
  return (
    <div className={style.cabinets}>
      <h1>Выберите кабинет</h1>
      <SelectedCabinets
        selected_cabinets={props.selected_cabinets}
        deselectCabinet={props.deselectCabinet}
      />
      <CabinetsList
        didGet={props.didGet}
        oid={props.oid}
        cabinets={props.cabinets}
        selected_cabinets={props.selected_cabinets}
        getCabinets={props.getCabinets}
        selectCabinet={props.selectCabinet}
      />
    </div>
  );
};

export default Cabinets;
