import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Banner from "../Banner";
import style from "./style.module.css";

type Props = {
  filtered_items: any;
  selected_items: any;
  filter_value: string;
  didGet: boolean;

  banner_main_text: string;
  banner_secondary_text: string;

  getItems: (oid?: string) => void;

  getSelectedItems: (selected_item: any) => void;

  setAddress: () => void;
  items_component: JSX.Element[] | undefined;
  selected_items_component: JSX.Element[] | undefined;

  fromDate?: Date;
  toDate?: Date;
  getTimetable?: (selected_items: any, fromDate?: Date, toDate?: Date) => void;
};

const ItemsList = (props: Props) => {
  return (
    <>
      {props.selected_items !== undefined ? (
        <>
          <div className={style.chips}>{props.selected_items_component}</div>
          {props.selected_items.length ? (
            <Button
              variant="contained"
              className={style.btn}
              color="primary"
              onClick={() => {
                if (props.fromDate && props.toDate) {
                  props.getTimetable!(props.selected_items, props.fromDate, props.toDate);
                } else {
                  props.getTimetable!(props.selected_items);
                }

                props.setAddress();
              }}
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
              {props.items_component === undefined ? (
                <></>
              ) : (
                <Paper className={style.list}>
                  <List>{props.items_component}</List>
                </Paper>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {props.getItems !== undefined || props.getSelectedItems !== undefined ? (
            <CircularProgress className={style.progress} />
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default ItemsList;
