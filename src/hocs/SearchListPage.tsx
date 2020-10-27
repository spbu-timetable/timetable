import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import React from "react";
import style from "./style.module.css";
import { useHistory } from "react-router-dom";
import Banner from "../components/Reusable/Banner";
import Search from "../components/Reusable/Search";
import getObjectName from "../helpers/getObjectName";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Add } from "@material-ui/icons";

type Props = {
  items?: any;
  filtered_items: any;
  selected_items?: any;
  filter_value: string;

  didGet?: boolean;

  header_text?: string;
  banner_main_text?: string;
  banner_secondary_text?: string;

  url_to_push?: string;

  getItems?: (oid?: string) => void;
  setItem?: (item: any) => void;
  selectItem?: (item: any) => void;
  deselectItem?: (item: any) => void;
  updFilter: (filterStr: string) => void;
  updFilterValue?: (filterStr: string) => void;

  oid?: string;
  cleanItems?: () => void;
};

function SearchListPage(props: Props) {
  const [, setChipData] = React.useState<any>(props.selected_items);
  const handleDelete = (itemToDelete: any) => () => {
    alert("tapped");
    setChipData((items: any) => items.filter((item: any) => item.Oid !== itemToDelete.Oid));
    props.deselectItem!(itemToDelete);
  };

  React.useEffect(() => {
    if (props.oid !== undefined) {
      props.cleanItems!();
      props.getItems!(props.oid!);
    }
  }, [props.oid, props.cleanItems, props.getItems]);

  let selected_items_component;
  if (props.selected_items) {
    selected_items_component = props.selected_items.map((item: any) => (
      <Chip
        key={item.Oid}
        label={getObjectName(item)}
        className={style.chip}
        onDelete={handleDelete(item)}
      />
    ));
  }

  const history = useHistory();
  function setAddress(): void {
    history.push(props.url_to_push!);
  }
  function setItem(item: any) {
    props.setItem!(item);
  }
  function checkSelection(cabinet: any): boolean {
    if (props.selected_items.length === 4) {
      return true;
    }

    for (let i = 0; i < props.selected_items.length; i++) {
      if (props.selected_items.includes(cabinet)) {
        return true;
      }
    }
    return false;
  }
  function createListItems(items: any) {
    const list_items = [];

    for (let i = 0; i < items.length; i++) {
      list_items.push(
        <ListItem
          key={i}
          button
          disabled={props.selected_items === undefined ? false : checkSelection(items[i])}
          divider={i === items.length - 1 ? false : true}
          onClick={() => {
            if (props.selected_items === undefined) {
              setItem(items[i]);
              setAddress();
            } else {
              setItem(items[i]);
            }
          }}
        >
          <ListItemText primary={getObjectName(items[i])} />
          {props.selected_items !== undefined ? (
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                disabled={checkSelection(items[i])}
                onClick={() => props.setItem!(items[i])}
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

  let items_component;
  if (props.didGet) {
    if (props.filter_value !== "") {
      items_component = createListItems(props.filtered_items);
    } else {
      if (props.items !== undefined) {
        items_component = createListItems(props.items);
      }
    }
  } else {
    if (props.getItems !== undefined) {
      if (props.oid !== undefined) {
        props.getItems!(props.oid);
      } else {
        props.getItems!();
      }
    }
  }

  return (
    <div className={style.wrapper}>
      <h1>{props.header_text}</h1>
      <Search
        className={style.search}
        value={props.filter_value}
        updFilter={props.updFilter}
        updFilterValue={props.updFilterValue}
      />

      {props.selected_items !== undefined ? (
        <>
          <div className={style.chips}>{selected_items_component}</div>
          {props.selected_items.length ? (
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
        </>
      ) : (
        <></>
      )}

      {props.didGet ? (
        <>
          {props.filter_value !== "" && props.filtered_items.length === 0 ? (
            <Banner mainText={props.banner_main_text} secondaryText={props.banner_secondary_text} />
          ) : (
            <>
              {items_component === undefined ? (
                <></>
              ) : (
                <Paper className={style.list}>
                  <List>{items_component}</List>
                </Paper>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {props.getItems !== undefined ? <CircularProgress className={style.progress} /> : <></>}
        </>
      )}
    </div>
  );
}

export default SearchListPage;
