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

type Props = {
  didGet: boolean;
  addresses: Address[];

  getAddresses: () => void;
  setAddress: (address: Address) => void;
};

const Addresses = (props: Props) => {
  let addresses_component;
  const history = useHistory();

  function setAddress(address: Address): void {
    props.setAddress(address);
    history.push("/addresses/cabinets");
  }

  if (props.didGet) {
    addresses_component = props.addresses.map((address: Address) => (
      <ListItem button divider={true} onClick={() => setAddress(address)}>
        <ListItemText primary={address.DisplayName1} />
      </ListItem>
    ));
  } else {
    props.getAddresses();
  }

  return (
    <div className={style.address}>
      <h1>Выберите адрес</h1>
      <Search className={style.search} />
      {props.didGet ? (
        <Paper className={style.list}>
          <List>{addresses_component}</List>
        </Paper>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Addresses;
