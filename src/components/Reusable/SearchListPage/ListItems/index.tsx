import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Add from "@material-ui/icons/Add";
import React from "react";
import getObjectId from "../../../../helpers/getObjectId";
import getObjectName from "../../../../helpers/getObjectName";
import { SavedItem } from "../../../../types/User";
import useLongPress from "../../useLongPress";
import style from "../style.module.css";
import checkSelection from "./checkSelection";

type Props = {
  isDialog?: boolean;
  dialogTitle?: string;

  items: any;
  selected_items: any;
  url: string;
  setItem: (item: any) => void;
  setAddress: (url: string) => void;

  longPressAction?: (item: SavedItem) => void;
};

const ListItems: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState<number>(0);

  /*********************************************************************************************************************
                                                    Dialog Handlers                                        
  **********************************************************************************************************************/
  const handleOpen = () => {
    setOpen(props.isDialog!);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const saveItem = () => {
    props.longPressAction!({ id: getObjectId(props.items[item]), name: getObjectName(props.items[item]) });
    console.log(props.items[item]);
    setOpen(false);
  };

  /*********************************************************************************************************************
                                                    Long Press Hook
  **********************************************************************************************************************/
  const onLongPress = () => {
    console.log("long is triggered");
    handleOpen();
  };
  const onClick = () => {
    console.log("click is triggered");
  };
  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };
  let longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  const list_items = [];
  for (let i = 0; i < props.items.length; i++) {
    list_items.push(
      <ListItem
        {...longPressEvent}
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
        onMouseOver={() => {
          setItem(i);
        }}
      >
        <ListItemText primary={getObjectName(props.items[i])} />
        {props.selected_items !== undefined ? (
          <ListItemSecondaryAction>
            <IconButton
              {...longPressEvent}
              edge="end"
              disabled={checkSelection(props.items[i], props.selected_items)}
              onClick={() => props.setItem!(props.items[i])}
            >
              <Add />
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
          {props.dialogTitle} {getObjectName(props.items[item!])} в закладки?
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
