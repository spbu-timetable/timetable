import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

import React from "react";
import style from "./style.module.css";
import { useHistory } from "react-router-dom";
import Banner from "../../components/Reusable/Banner";
import Search from "../../components/Reusable/Search";
import getObjectName from "../../helpers/getObjectName";

import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import createListItems from "./createListItems";
import getObjectId from "../../helpers/getObjectId";
import StudyLevel from "../../types/StudyLevel";

type Props = {
  items?: any;
  filtered_items: any;
  selected_items?: any;
  filter_value: string;
  selected_item?: StudyLevel;
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
  getSelectedItems?: (selected_item: StudyLevel) => void;

  oid?: string;
  cleanItems?: () => void;
};

function SearchListPage(props: Props) {
  const [, setChipData] = React.useState<any>(props.selected_items);
  const handleDelete = (chipToDelete: any) => () => {
    setChipData((chips: any) => chips.filter((chip: any) => chip.key !== chipToDelete.key));
    props.deselectItem!(chipToDelete);
  };
  React.useEffect(() => {
    if (props.oid !== undefined) {
      if (props.cleanItems !== undefined){
      props.cleanItems!();
      }
      props.getItems!(props.oid!);
    }
    if (props.getSelectedItems !== undefined){
      props.getSelectedItems(props.selected_item!);
    }
  }, [props.oid, props.cleanItems, props.getItems, props.getSelectedItems, props.selected_item]);

  let selected_items_component;
  if (props.selected_items !== undefined) {
    selected_items_component = props.selected_items.map((item: any) => (
      <Chip
        key={getObjectId(item)}
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

  let items_component;
  if (props.didGet) {
    if (props.filter_value !== "") {
      items_component = createListItems(
        props.filtered_items,
        props.selected_items,
        props.url_to_push!,
        props.setItem!,
        setAddress
      );
    } else if (props.items !== undefined) {
      items_component = createListItems(
        props.items,
        props.selected_items,
        props.url_to_push!,
        props.setItem!,
        setAddress
      );
    }
  } else {
    if (props.getItems !== undefined) {
      props.oid === undefined ? props.getItems!() : props.getItems!(props.oid);
    }
    if (props.getSelectedItems !== undefined){
      props.getSelectedItems(props.selected_item!);
    }
  }

  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>{props.header_text}</h1>
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
          {props.getItems !== undefined || props.getSelectedItems !== undefined ? <CircularProgress className={style.progress} /> : <></>}
        </>
      )}
    </div>
  );
}

export default SearchListPage;
