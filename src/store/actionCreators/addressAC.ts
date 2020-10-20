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

const addressAC = {
  getAddresses: getAddresses,
  setAddresses: setAddresses,
  setAddress: setAddress,
};

export default addressAC;
