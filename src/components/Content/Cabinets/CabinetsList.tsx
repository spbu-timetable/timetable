import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { Add } from "@material-ui/icons";
import React from "react";
import Cabinet from "../../../types/Cabinet";
import style from "./style.module.css";

type Props = {
  didGet: boolean;
  oid: string;
  cabinets: Cabinet[];
  selected_cabinets: Cabinet[];

  getCabinets: (oid: string) => void;
  selectCabinet: (cabinet: Cabinet) => void;
};

const CabinetsList = (props: Props) => {
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

  if (props.didGet) {
    cabinets_component = props.cabinets.map((cabinet: Cabinet) => (
      <ListItem
        button
        divider={true}
        // disabled={checkSelection(cabinet)}
        onClick={() => props.selectCabinet(cabinet)}
      >
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
    <>
      {props.didGet ? (
        <Paper className={style.list}>
          <List>{cabinets_component}</List>
        </Paper>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </>
  );
};

export default CabinetsList;
