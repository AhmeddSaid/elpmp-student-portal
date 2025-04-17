import { createSlice } from "@reduxjs/toolkit";

const initialState = { popUpIsOpen: true };

export const OpenAndClosePopUp = createSlice({
	name: "OpenAndClosePopUp",
	initialState,

	reducers: {
		openAndClosePopUp: state => {
			state.popUpIsOpen = !state.popUpIsOpen;
		},
		closePopUp: state => {
			state.popUpIsOpen = true;
		},
	},
});

export const OpenAndClosePopUpReducer = OpenAndClosePopUp.reducer;

export const { openAndClosePopUp, closePopUp } = OpenAndClosePopUp.actions;
