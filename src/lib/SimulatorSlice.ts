import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { openAllQuestion } from "@/lib/OpenAndCloseAllQuestion";
import { closeExp } from "@/lib/ShowExplenation";
import socket from "@/lib/SocketIOSetup";

interface Question {
	maxQuestion: number | undefined;
	questionAr: string;
	questionEn: string;
	Answers: { isCorrect: boolean; id: string; answerAr: string; answerEn: string }[];
	isFlagged: boolean;
	currentQuestion: number;
	totalQuestions: number;
	remainingTime: number;
	progress: number;
	type: "MULTIBLECHOISE" | "SINGLE" | "MATCH";
	answersCount?: number;
	userAnswer?: string[];
	explanationAr?: string;
	explanationEn?: string;
	mode: "REAL" | "LEARNING" | null;
	image?: string;
	totalTime: number;
}

interface ExamInfo {
	nameEn: string;
	nameAr: string;
	questions: [];
	flagged?: boolean;
	answered?: boolean;
}

interface SimulatorState {
	examInfo: ExamInfo;
	question: Question;
	loadQuestion: boolean;
	exit: boolean;
	pause: boolean;
	isLoading: boolean;
	error: boolean;
	userAnswers: string[];
	isAnswered: boolean;
	QuestionsAnswers: [];
}

const initialState: SimulatorState = {
	examInfo: { nameEn: "", nameAr: "", questions: [] },
	question: {
		questionAr: "",
		questionEn: "",
		explanationAr: "",
		explanationEn: "",
		Answers: [],
		isFlagged: false,
		currentQuestion: 0,
		totalQuestions: 0,
		progress: 0,
		type: "SINGLE",
		mode: null,
		maxQuestion: undefined,
		remainingTime: 0,
		totalTime: 0,
	},
	userAnswers: [],
	loadQuestion: false,
	exit: false,
	pause: false,
	isLoading: false,
	error: false,
	isAnswered: false,
	QuestionsAnswers: [],
};

const simulatorSlice = createSlice({
	name: "simulator",
	initialState,
	reducers: {
		getExamSuccess: (state, action: PayloadAction<ExamInfo>) => {
			state.examInfo = action.payload;
		},
		questionReceived: (state, action: PayloadAction<Question>) => {
			state.question = action.payload;
		},
		setLoadQuestion: (state, action: PayloadAction<boolean>) => {
			state.loadQuestion = action.payload;
		},
		setExit: (state, action: PayloadAction<boolean>) => {
			state.exit = action.payload;
		},
		setPause: (state, action: PayloadAction<boolean>) => {
			state.pause = action.payload;
		},
		resetAnswers: state => {
			state.userAnswers = [];
		},
		addAnswer: (state, action: PayloadAction<string[]>) => {
			state.userAnswers = action.payload;
		},
	},
	// extraReducers: builder => {
	// 	builder.addCase(initializeExam.pending, state => {
	// 		state.isLoading = true;
	// 	});
	// 	builder.addCase(initializeExam.fulfilled, (state, action) => {
	// 		state.isLoading = false;
	// 	});
	// 	builder.addCase(initializeExam.rejected, (state, action) => {
	// 		state.isLoading = false;
	// 		state.error = true;
	// 	});
	// },
});

export const {
	getExamSuccess,
	questionReceived,
	setLoadQuestion,
	setExit,
	// setPause,
	resetAnswers,
	addAnswer,
} = simulatorSlice.actions;

export const nextQuestion = createAsyncThunk(
	"simulator/nextQuestion",
	async (exam: string, { dispatch }) => {
		dispatch(setLoadQuestion(true));
		socket.emit("next_question", exam);
		dispatch(resetAnswers());
		dispatch(closeExp());
	},
);

export const prevQuestion = createAsyncThunk(
	"simulator/prevQuestion",
	async (exam: string, { dispatch }) => {
		dispatch(setLoadQuestion(true));
		socket.emit("prev_question", exam);
		dispatch(resetAnswers());
		dispatch(closeExp());
	},
);

export const flagQuestion = createAsyncThunk(
	"simulator/flagQuestion",
	async (exam: string, { dispatch }) => {
		dispatch(setLoadQuestion(true));
		socket.emit("flag", exam);
	},
);

export const unflagQuestion = createAsyncThunk(
	"simulator/unflagQuestion",
	async (exam: string, { dispatch }) => {
		dispatch(setLoadQuestion(true));
		socket.emit("unflag", exam);
	},
);

export const jumpToQuestion = createAsyncThunk(
	"simulator/jumpToQuestion",
	async ({ exam, index }: { exam: string; index: number }, { dispatch }) => {
		dispatch(setLoadQuestion(true));
		socket.emit("jump_to_question", exam, index);
		dispatch(openAllQuestion());
		dispatch(resetAnswers());
		dispatch(closeExp());
	},
);

export const endExam = createAsyncThunk("simulator/endExam", async (exam: string) => {
	socket.emit("end_exam", exam);
});

export const submitAnswer = createAsyncThunk(
	"simulator/submitAnswer",
	async (exam: string, { dispatch, getState }) => {
		const state = getState() as { simulator: SimulatorState };
		const userAnswers = state.simulator.userAnswers;
		socket.emit("answer_question", exam, userAnswers);
		dispatch(closeExp());
	},
);

export const simulatorReducer = simulatorSlice.reducer;
export default simulatorSlice.reducer;
