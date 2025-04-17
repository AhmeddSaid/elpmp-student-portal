import { createSlice } from "@reduxjs/toolkit";

const z = { isEnrolled: false };

export const isEnrolledSlice = createSlice({
	name: "isEnrolled",
	initialState: z,

	reducers: {
		isEnrolledChange: state => {
			state.isEnrolled = !state.isEnrolled;
		},
	},
});

export const isEnrolledReducer = isEnrolledSlice.reducer;
export const { isEnrolledChange } = isEnrolledSlice.actions;
