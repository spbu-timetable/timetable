import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Add from "@material-ui/icons/Add";
import React from "react";
import getObjectName from "../../helpers/getObjectName";

function checkSelection(item: any, selected_items: any): boolean {
  if (selected_items.length === 4) {
    return true;
  }

  for (let i = 0; i < selected_items.length; i++) {
    if (selected_items.includes(item)) {
      return true;
    }
  }
  return false;
}

function createListItems(
  items: any,
  selected_items: any,
  url: string,
  setItem: (item: any) => void,
  setAddress: (url: string) => void
) {
  const list_items = [];

  for (let i = 0; i < items.length; i++) {
    list_items.push(
      <ListItem
        key={i}
        button
        disabled={selected_items === undefined ? false : checkSelection(items[i], selected_items)}
        divider={i === items.length - 1 ? false : true}
        onClick={() => {
          if (selected_items === undefined) {
            setItem(items[i]);
            setAddress(url);
          } else {
            setItem(items[i]);
          }
        }}
      >
        <ListItemText primary={getObjectName(items[i])} />
        {selected_items !== undefined ? (
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              disabled={checkSelection(items[i], selected_items)}
              onClick={() => setItem!(items[i])}
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
  return list_items;
}

export default createListItems;
