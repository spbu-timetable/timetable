import Action from "../../types/Action";
import Address from "../../types/Address";
import ACTION from "./ACTION";

function getAddresses(): Action {
  return { type: ACTION.GET_ADRESSES };
}

function setAddresses(addresses: Address[]): Action {
  return {
    type: ACTION.SET_ADDRESSES,
    payload: addresses,
  };
}

function setAddress(address: Address): Action {
  return {
    type: ACTION.SET_ADDRESS,
    payload: address,
  };
}

function updFilter(filterStr: string): Action {
  return {
    type: ACTION.FILTER_ADDRESSES,
    payload: filterStr,
  };
}

const addressAC = {
  getAddresses: getAddresses,
  setAddresses: setAddresses,
  setAddress: setAddress,
  updFilter: updFilter,
};

export default addressAC;
