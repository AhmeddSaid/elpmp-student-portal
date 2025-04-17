import { createSlice } from "@reduxjs/toolkit";

const counterValue = { counter: false };

export const openAndCloseAllQuestionSlice = createSlice({
	name: "openAndCloseAllQuestion",
	initialState: counterValue,

	reducers: {
		openAllQuestion: state => {
			state.counter = !state.counter;
		},
	},
});

export const OpenAndCloseAllQuestionReducer = openAndCloseAllQuestionSlice.reducer;
export const { openAllQuestion } = openAndCloseAllQuestionSlice.actions;
