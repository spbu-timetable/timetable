import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

import React from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Reusable/Banner";
import Search from "../components/Reusable/Search";
import getObjectName from "../helpers/getObjectName";

type Props = {
  items: any;
  filtered_items: any;
  filter_value: string;

  didGet: boolean;

  search_style?: string;
  list_style?: string;
  progress_style?: string;

  header_text?: string;
  banner_main_text?: string;
  banner_secondary_text?: string;

  url_to_push?: string;

  getItems: () => void;
  setItem: (item: any) => void;
  updFilter: (filterStr: string) => void;
};

function SearchListPage(props: Props) {
  const history = useHistory();
  function setItem(item: any) {
    props.setItem(item);
    if (props.url_to_push) {
      history.push(props.url_to_push!);
    }
  }

  function createListItems(items: any) {
    return items.map((item: any) => (
      <ListItem key={item.Oid} button divider={true} onClick={() => setItem(item)}>
        <ListItemText primary={getObjectName(item)} />
      </ListItem>
    ));
  }

  let items_component;
  if (props.didGet) {
    props.filter_value !== ""
      ? (items_component = createListItems(props.filtered_items))
      : (items_component = createListItems(props.items));
  } else {
    props.getItems();
  }

  return (
    <>
      <h1>{props.header_text}</h1>
      <Search
        className={props.search_style}
        value={props.filter_value}
        updFilter={props.updFilter}
      />
      {props.didGet ? (
        <>
          {props.filter_value !== "" && props.filtered_items.length === 0 ? (
            <Banner mainText={props.banner_main_text} secondaryText={props.banner_secondary_text} />
          ) : (
            <Paper className={props.list_style}>
              <List>{items_component}</List>
            </Paper>
          )}
        </>
      ) : (
        <CircularProgress className={props.progress_style} />
      )}
    </>
  );
}

export default SearchListPage;
