import React from "react";
import style from "./style.module.css";

import Address from "../../../types/Address";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import Search from "../../Reusable/Search";
import Paper from "@material-ui/core/Paper";
import Banner from "../../Reusable/Banner";

type Props = {
  didGet: boolean;
  addresses: Address[];
  filtered_addresses: Address[];
  filter_value: string;

  getAddresses: () => void;
  setAddress: (address: Address) => void;
  updFilter: (filterStr: string) => void;
};

const Addresses = (props: Props) => {
  const history = useHistory();

  function setAddress(address: Address): void {
    props.setAddress(address);
    history.push("/addresses/cabinets");
  }

  function createListItems(addresses: Address[]) {
    return addresses.map((address: Address) => (
      <ListItem key={address.Oid} button divider={true} onClick={() => setAddress(address)}>
        <ListItemText primary={address.DisplayName1} />
      </ListItem>
    ));
  }

  let addresses_component;
  if (props.didGet) {
    props.filter_value !== ""
      ? (addresses_component = createListItems(props.filtered_addresses))
      : (addresses_component = createListItems(props.addresses));
  } else {
    props.getAddresses();
  }

  return (
    <div className={style.address}>
      <h1>Выберите адрес</h1>
      <Search className={style.search} value={props.filter_value} updFilter={props.updFilter} />
      {props.didGet ? (
        <>
          {props.filter_value !== "" && props.filtered_addresses.length === 0 ? (
            <Banner
              mainText="Адрес не найден"
              secondaryText="Попробуйте ввести иначе или найти в списке"
            />
          ) : (
            <Paper className={style.list}>
              <List>{addresses_component}</List>
            </Paper>
          )}
        </>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Addresses;
