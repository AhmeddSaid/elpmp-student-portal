import { createSlice } from "@reduxjs/toolkit";

const xy = { currentQuestion: 1 };
export const totalNumberOfQuestion = 6;
export const NextAndPrevQuestionSlice = createSlice({
	name: "nextAndPrevQuestion",
	initialState: xy,

	reducers: {
		nextQuestion: state => {
			// Increment, but cap at 6
			if (state.currentQuestion < 6) {
				state.currentQuestion = state.currentQuestion + 1;
			}
		},
		PrevQuestion: state => {
			// Decrement, but not below 1
			if (state.currentQuestion > 1) {
				state.currentQuestion = state.currentQuestion - 1;
			}
		},
	},
});

export const NextAndPrevQuestionReducer = NextAndPrevQuestionSlice.reducer;

export const { nextQuestion, PrevQuestion } = NextAndPrevQuestionSlice.actions;
