import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IApp from "../models/IApp";

const initialState: IApp = {
	loading: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export default appSlice.reducer;
