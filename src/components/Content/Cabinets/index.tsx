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
import Banner from "../../Reusable/Banner";

type Props = {
  oid: string;
  didGet: boolean;
  filter_value: string;

  cabinets: Cabinet[];
  filtered_cabinets: Cabinet[];
  selected_cabinets: Cabinet[];

  getCabinets: (oid: string) => void;
  selectCabinet: (cabinet: Cabinet) => void;
  deselectCabinet: (oid: string) => void;
  updFilter: (filterStr: string) => void;

  cleanCabinets: () => void;
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

  React.useEffect(() => {
    props.cleanCabinets();
    props.getCabinets(props.oid);
  }, [props.oid]);

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
  props.filter_value !== ""
    ? (cabinets_component = createCabinetsComponent(props.filtered_cabinets))
    : (cabinets_component = createCabinetsComponent(props.cabinets));

  function createCabinetsComponent(cabinets: Cabinet[]): JSX.Element[] {
    return cabinets.map((cabinet: Cabinet) => (
      <ListItem
        key={cabinet.Oid}
        button
        divider={true}
        disabled={checkSelection(cabinet)}
        onClick={() => props.selectCabinet(cabinet)}
      >
        <ListItemText primary={cabinet.DisplayName1} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            disabled={checkSelection(cabinet)}
            onClick={() => props.selectCabinet(cabinet)}
          >
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  }

  return (
    <div className={style.cabinets}>
      <h1>Выберите кабинет</h1>
      <Search
        className={style.search}
        items={props.cabinets}
        value={props.filter_value}
        updFilter={props.updFilter}
      />

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
        <>
          {props.filter_value !== "" && props.filtered_cabinets.length === 0 ? (
            <Banner
              mainText="Кабинет не найден"
              secondaryText="Попробуйте ввести иначе или найти в списке"
            />
          ) : (
            <Paper className={style.list}>
              <List>{cabinets_component}</List>
            </Paper>
          )}
        </>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Cabinets;
