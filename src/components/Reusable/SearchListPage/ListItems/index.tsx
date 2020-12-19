import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import React from "react";
import getObjectId from "../../../../helpers/getObjectId";
import getObjectName from "../../../../helpers/getObjectName";
import { SavedItem } from "../../../../types/User";
import style from "../style.module.css";
import checkSelection from "./checkSelection";

type Props = {
  isDialog?: boolean;
  dialogTitle?: string;

  actionBtnIcon: "add" | "remove" | "none";

  items: any;
  selected_items: any;
  url: string;
  setItem: (item: any) => void;
  setAddress: (url: string) => void;

  actionBtnAction?: (item: SavedItem) => void;
};

const ListItems = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState<number>(0);

  const handleClose = () => {
    setOpen(false);
  };

  let actionBtnIcon;
  switch (props.actionBtnIcon) {
    case "add":
      actionBtnIcon = <Add />;
      break;
    case "remove":
      actionBtnIcon = <Remove />;
      break;
    case "none":
      actionBtnIcon = <></>;
      break;
  }

  const saveItem = () => {
    props.actionBtnAction!({ id: getObjectId(props.items[index]), name: getObjectName(props.items[index]) });
    console.log(props.items[index]);
    setOpen(false);
  };

  const list_items = [];
  for (let i = 0; i < props.items.length; i++) {
    list_items.push(
      <ListItem
        key={i}
        button
        disabled={props.selected_items === undefined ? false : checkSelection(props.items[i], props.selected_items)}
        divider={i === props.items.length - 1 ? false : true}
        onClick={() => {
          if (props.selected_items === undefined) {
            props.setItem(props.items[i]);
            props.setAddress(props.url);
          } else {
            props.setItem(props.items[i]);
          }
        }}
      >
        <ListItemText primary={getObjectName(props.items[i])} />
        {props.selected_items !== undefined ? (
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={() => {
                setIndex(i);
                setOpen(props.isDialog ? true : false);
              }}
            >
              {actionBtnIcon}
            </IconButton>
          </ListItemSecondaryAction>
        ) : (
          <></>
        )}
      </ListItem>
    );
  }

  return (
    <>
      {list_items}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.dialogTitle} {props.items[index] ? getObjectName(props.items[index!]) : ""}{" "}
          {props.actionBtnIcon === "add" ? "в закладки" : "из закладок"}?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className={style.dialog_btn}>
            Нет
          </Button>
          <Button onClick={saveItem} color="primary" autoFocus className={style.dialog_btn}>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ListItems;
