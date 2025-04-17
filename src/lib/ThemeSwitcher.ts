import { createSlice } from "@reduxjs/toolkit";

const x = { isLight: true };
export const changeThemeSlice = createSlice({
	name: "themeSwitcher",
	initialState: x,
	reducers: {
		changeTheme: state => {
			state.isLight = !state.isLight;
		},
	},
});

export const changeThemeReducer = changeThemeSlice.reducer;
export const { changeTheme } = changeThemeSlice.actions;
