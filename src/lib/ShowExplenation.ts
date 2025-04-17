import { createSlice } from "@reduxjs/toolkit";

const y = { open: false };

export const ShowExplanationSlice = createSlice({
	name: "ShowExplanation",
	initialState: y,
	reducers: {
		ShowExp: state => {
			state.open = !state.open;
		},
		closeExp: state => {
			state.open = false;
		},
	},
});

export const ShowAndHideExplenationReducer = ShowExplanationSlice.reducer;
export const { ShowExp, closeExp } = ShowExplanationSlice.actions;
