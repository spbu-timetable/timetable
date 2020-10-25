import React from "react";
import style from "./style.module.css";

import Cabinet from "../../../types/Cabinet";

import Search from "../../Reusable/Search";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { useHistory } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

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
  const [, setChipData] = React.useState<Cabinet[]>(props.selected_cabinets);
  const handleDelete = (cabinetToDelete: Cabinet) => () => {
    setChipData((cabinets) => cabinets.filter((cabinet) => cabinet.Oid !== cabinetToDelete.Oid));
    props.deselectCabinet(cabinetToDelete.Oid);
  };

  const history = useHistory();
  function setAddress(): void {
    history.push("/addresses/cabinets/timetable");
  }

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

  let cabinets_component;

  function checkSelection(cabinet: Cabinet): boolean {
    if (props.selected_cabinets.length === 4) {
      return true;
    }

    for (let i = 0; i < props.selected_cabinets.length; i++) {
      if (props.selected_cabinets.includes(cabinet)) {
        return true;
      }
    }
    return false;
  }

  function createCabinetsComponent(): JSX.Element[] {
    return (cabinets_component = props.cabinets.map((cabinet: Cabinet) => (
      <ListItem
        button
        divider={true}
        disabled={checkSelection(cabinet)}
        onClick={() => props.selectCabinet(cabinet)}
      >
        <ListItemText primary={cabinet.DisplayName1} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={() => props.selectCabinet(cabinet)}>
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )));
  }

  if (props.didGet) {
    cabinets_component = createCabinetsComponent();
  } else {
    props.getCabinets(props.oid);
  }

  React.useEffect(() => {
    console.log("useEffect", props.selected_cabinets);
    cabinets_component = createCabinetsComponent();
  });

  return (
    <div className={style.cabinets}>
      <h1>Выберите кабинет</h1>
      <Search className={style.search} />

      <div className={style.chips}>{selected_cabinets_component}</div>
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
        <></>
      )}

      {props.didGet ? (
        <Paper className={style.list}>
          <List>{cabinets_component}</List>
        </Paper>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Cabinets;
