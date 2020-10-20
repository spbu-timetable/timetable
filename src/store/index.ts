import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import Header from "../types/Header";
import AddressesPage from "../types/AddressesPage";

import header from "./reducers/header";
import addresses from "./reducers/addresses";
import watchGetAddresses from "./sagas/getAdresses";
import cabinets from "./reducers/cabinets";
import CabinetsPage from "../types/CabinetsPage";
import watchGetCabinets from "./sagas/getCabinets";

const reducers = combineReducers({
  header: header,
  addresses: addresses,
  cabinets: cabinets,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    header: Header;
    addresses: AddressesPage;
    cabinets: CabinetsPage;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchGetAddresses);
saga.run(watchGetCabinets);

export default store;
