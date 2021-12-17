import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TLayout from "../../types/Layout";
import TSection from "../../types/Section";
import IApp from "../models/IApp";

const initialState: IApp = {
	loading: false,
	section: 0,
	layout: "desktop",
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setLayout: (state, action: PayloadAction<TLayout>) => {
			state.layout = action.payload;
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		setSection: (state, action: PayloadAction<number>) => {
			state.section = action.payload;
		},
	},
});

export default appSlice.reducer;
