import React from "react";
import style from "./style.module.css";

import Cabinet from "../../../types/Cabinet";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Add from "@material-ui/icons/Add";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";

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
  let cabinets_component;
  let selected_cabinets_component;

  const [chipData, setChipData] = React.useState<Cabinet[]>(props.selected_cabinets);

  const handleDelete = (cabinetToDelete: Cabinet) => () => {
    setChipData((cabinets) => cabinets.filter((cabinet) => cabinet.Oid !== cabinetToDelete.Oid));
    props.deselectCabinet(cabinetToDelete.Oid);
  };

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

  if (props.didGet) {
    cabinets_component = props.cabinets.map((cabinet: Cabinet) => (
      <ListItem>
        <ListItemText primary={cabinet.DisplayName1} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => props.selectCabinet(cabinet)}>
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  } else {
    props.getCabinets(props.oid);
  }

  return (
    <div className={style.cabinets}>
      <h1>Выберите кабинет</h1>
      <div className={style.chips}>
        {selected_cabinets_component}
        {props.selected_cabinets.length? (
          <Button variant="contained" color="primary">
            Показать
          </Button>
        ) : (
          <Button disabled variant="contained" color="primary">
            Показать
          </Button>
        )}
      </div>
      {props.didGet ? (
        <List className={style.list}>{cabinets_component}</List>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Cabinets;
