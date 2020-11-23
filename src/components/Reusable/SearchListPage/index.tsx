import React from "react";
import style from "./style.module.css";
import { useHistory } from "react-router-dom";

import Search from "../Search";
import ItemsList from "./ItemsList";

import getObjectName from "../../../helpers/getObjectName";
import getObjectId from "../../../helpers/getObjectId";

import Chip from "@material-ui/core/Chip";
import setListItems from "./setListItems";

type Props = {
  items?: any;
  filtered_items: any;
  selected_items?: any;
  filter_value: string;
  selected_item?: any;
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
  getSelectedItems?: (selected_item: any) => void;

  oid?: string;
  cleanItems?: () => void;

  fromDate?: Date;
  toDate?: Date;
  getTimetable?: (selected_items: any, fromDate?: Date, toDate?: Date) => void;
};

/**
 * @param items объекты, формирующие список
 * @param filtered_items объекты items, полученные с помощью фильтрации полем для поиска
 * @param
 */

function SearchListPage(props: Props) {
  const [, setChipData] = React.useState<any>(props.selected_items);
  const handleDelete = (chipToDelete: any) => () => {
    setChipData((chips: any) => chips.filter((chip: any) => chip.key !== chipToDelete.key));
    props.deselectItem!(chipToDelete);
  };
  React.useEffect(() => {
    if (props.oid !== undefined) {
      if (props.cleanItems !== undefined) {
        props.cleanItems!();
      }
      props.getItems!(props.oid!);
    }
    if (props.getSelectedItems !== undefined) {
      props.getSelectedItems(props.selected_item!);
    }
  }, [props.oid, props.cleanItems, props.getItems, props.getSelectedItems, props.selected_item]);

  let selected_items_component;
  if (props.selected_items !== undefined) {
    selected_items_component = props.selected_items.map((item: any) => (
      <Chip key={getObjectId(item)} label={getObjectName(item)} className={style.chip} onDelete={handleDelete(item)} />
    ));
  }

  const history = useHistory();
  function setAddress(): void {
    history.push(props.url_to_push!);
  }

  let items_component: JSX.Element[] | undefined = setListItems(
    props.oid!,
    props.didGet!,
    props.filter_value,
    props.items!,
    props.filtered_items,
    props.selected_items!,
    props.selected_item,
    props.url_to_push!,
    props.setItem!,
    setAddress,
    props.getItems!,
    props.getSelectedItems!
  );

  return (
    <div className={style.wrapper}>
      <h1 className={style.header}>{props.header_text}</h1>
      <Search
        className={style.search}
        value={props.filter_value}
        updFilter={props.updFilter}
        updFilterValue={props.updFilterValue}
      />

      <ItemsList
        filtered_items={props.filtered_items}
        selected_items={props.selected_items}
        filter_value={props.filter_value}
        didGet={props.didGet!}
        banner_main_text={props.banner_main_text!}
        banner_secondary_text={props.banner_secondary_text!}
        getItems={props.getItems!}
        getSelectedItems={props.getSelectedItems!}
        setAddress={setAddress}
        items_component={items_component}
        selected_items_component={selected_items_component}
        fromDate={props.fromDate}
        toDate={props.toDate}
        getTimetable={props.getTimetable}
      />
    </div>
  );
}

export default SearchListPage;
