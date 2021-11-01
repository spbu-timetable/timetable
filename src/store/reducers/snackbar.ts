import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISnackbar from "../models/ISnackbar";

const initialState: ISnackbar = {
	open: false,
	message: "",
};

export const snackbarSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setOpen: (state, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},

		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload;
		},
	},
});

export default snackbarSlice.reducer;
