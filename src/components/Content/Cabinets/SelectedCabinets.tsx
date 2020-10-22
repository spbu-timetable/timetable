import React from "react";
import style from "./style.module.css";
import Cabinet from "../../../types/Cabinet";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

type Props = {
  className?: string;
  selected_cabinets: Cabinet[];

  deselectCabinet: (oid: string) => void;
};

const SelectedCabinets = (props: Props) => {
  const [, setChipData] = React.useState<Cabinet[]>(props.selected_cabinets);

  const handleDelete = (cabinetToDelete: Cabinet) => () => {
    setChipData((cabinets) => cabinets.filter((cabinet) => cabinet.Oid !== cabinetToDelete.Oid));
    props.deselectCabinet(cabinetToDelete.Oid);
  };

  let selected_cabinets_component;
  if (props.selected_cabinets) {
    selected_cabinets_component = props.selected_cabinets.map((cabinet: Cabinet) => (
      <Chip
        key={cabinet.Oid}
        label={cabinet.DisplayName1}
        className={style.chip}
        onDelete={handleDelete(cabinet)}
      />
    ));
  }

  return (
    <div className={style.chips + " " + props.className}>
      {selected_cabinets_component}
      {props.selected_cabinets.length ? (
        <Button variant="contained" color="primary">
          Показать
        </Button>
      ) : (
        <Button disabled variant="contained" color="primary">
          Показать
        </Button>
      )}
    </div>
  );
};

export default SelectedCabinets;
