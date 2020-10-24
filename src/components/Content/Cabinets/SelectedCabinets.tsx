import React from "react";
import style from "./style.module.css";
import Cabinet from "../../../types/Cabinet";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";

type Props = {
  className?: string;
  selected_cabinets: Cabinet[];

  deselectCabinet: (oid: string) => void;
};

const SelectedCabinets = (props: Props) => {
  const [, setChipData] = React.useState<Cabinet[]>(props.selected_cabinets);
  const history = useHistory();

  function setAddress(): void {
    history.push("/addresses/cabinets/timetable");
  }

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
    <>
      <div className={style.chips + " " + props.className}>{selected_cabinets_component}</div>
      {props.selected_cabinets.length ? (
        <Button
          variant="contained"
          className={style.btn}
          color="primary"
          onClick={() => setAddress()}
        >
          Показать
        </Button>
      ) : (
        <Button disabled variant="contained" className={style.btn}>
          Показать
        </Button>
      )}
    </>
  );
};

export default SelectedCabinets;
