import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line
import { combineReducers } from "redux";
import { OpenAndCloseAllQuestionReducer } from "@/lib/OpenAndCloseAllQuestion";
import { OpenAndClosePopUpReducer } from "@/lib/OpenAndClosePopUp";
import { openAndCloseSideBarReducer } from "@/lib/OpenAndCloseSideBar";
import { ChangeDirectionReducer } from "@/lib/PageDirection";
import { ShowAndHideExplenationReducer } from "@/lib/ShowExplenation";
import { simulatorReducer } from "@/lib/SimulatorSlice";
import { changeThemeReducer } from "@/lib/ThemeSwitcher";
import { isEnrolledReducer } from "@/lib/isEnrolled";

export const Store1 = configureStore({
	reducer: {
		OpenAndCloseSideBar: openAndCloseSideBarReducer,
		ChangeTheme: changeThemeReducer,
		isEnrolled: isEnrolledReducer,
		PopUp: OpenAndClosePopUpReducer,
	},
});

export const SimulatorStore = configureStore({
	reducer: {
		simulator: simulatorReducer,
		openAndClose: OpenAndCloseAllQuestionReducer,
		openAndHideExp: ShowAndHideExplenationReducer,
		ChangeDirectionAnswer: ChangeDirectionReducer,
	},
});

const rootReducer = combineReducers({
	openAndClose: OpenAndCloseAllQuestionReducer,
	openAndHideExp: ShowAndHideExplenationReducer,
	ChangeDirectionAnswer: ChangeDirectionReducer,
	OpenAndCloseSideBar: openAndCloseSideBarReducer,
	ChangeTheme: changeThemeReducer,
	isEnrolled: isEnrolledReducer,
	PopUp: OpenAndClosePopUpReducer,
});

export type MainRootState = ReturnType<typeof rootReducer>;
export type SimulatorRootState = ReturnType<typeof SimulatorStore.getState>;
export type SimulatorAppDispatch = typeof SimulatorStore.dispatch;
