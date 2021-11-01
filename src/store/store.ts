import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import addressesApi from "../services/addresses";
import logger from "redux-logger";
import app from "./reducers/app";

export const store = configureStore({
	reducer: {
		app,
		[addressesApi.reducerPath]: addressesApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(addressesApi.middleware).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
