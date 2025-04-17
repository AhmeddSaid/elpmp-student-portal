import { createSlice } from "@reduxjs/toolkit";

const z = { dirIsLTR: false };

export const ChangeDirectionSlice = createSlice({
	name: "ChangeDirection",
	initialState: z,

	reducers: {
		ChangeDirection: state => {
			state.dirIsLTR = !state.dirIsLTR;
		},
	},
});

export const ChangeDirectionReducer = ChangeDirectionSlice.reducer;
export const { ChangeDirection } = ChangeDirectionSlice.actions;
