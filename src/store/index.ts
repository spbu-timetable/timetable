import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import header from "./reducers/header";
import Header from "../types/Header";

const reducers = combineReducers({
  header: header,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    header: Header;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

export default store;
