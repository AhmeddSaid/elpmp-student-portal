import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: typeof window !== "undefined" ? JSON.parse("true") : true,
};

export const openAndCloseSideBar = createSlice({
	name: "openAndCloseSideBar",
	initialState,

	reducers: {
		OpenAndClose: state => {
			state.isOpen = !state.isOpen;
			// localStorage.setItem("sidebarIsOpen", JSON.stringify(state.isOpen));
			// console.log("Sidebar state toggled: ", state.isOpen);
		},
		setSidebarState: (state, action) => {
			state.isOpen = action.payload;
			// localStorage.setItem("sidebarIsOpen", JSON.stringify(state.isOpen));
			// console.log("Sidebar state set to: ", state.isOpen);
		},
	},
});

export const openAndCloseSideBarReducer = openAndCloseSideBar.reducer;
export const { OpenAndClose, setSidebarState } = openAndCloseSideBar.actions;
