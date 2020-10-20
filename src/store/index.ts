import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Action from "../types/Action";
import Header from "../types/Header";
import Content from "../types/Content";

import header from "./reducers/header";
import content from "./reducers/content";

const reducers = combineReducers({
  header: header,
  content: content,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    header: Header;
    content: Content;
  }>,
  Action
> = createStore(reducers, applyMiddleware(logger, saga));

export default store;
