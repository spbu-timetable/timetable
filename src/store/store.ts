import { applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const reducers = combineReducers({
  app: reducer,
});

const saga = createSagaMiddleware();

let store: Store<
  CombinedState<{
    app: any; //Заглушка
  }>,
  any //Заглушка
> = createStore(reducers, applyMiddleware(logger, saga));
