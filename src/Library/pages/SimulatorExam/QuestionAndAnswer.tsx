import React, {
	MouseEvent as ReactMouseEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./../../Common/Grids/Spaces.module.css";
import Answer from "@/Library/Common/Answer/Answer";
import DragDropComponent from "@/Library/Common/DND/DragDropComponent";
import Question from "@/Library/Common/Question/Question";
import { Paragraph } from "@/Library/Common/Typograhy/Typography";
import { QuestionAndAnswerShell } from "@/Library/pages/SimulatorExam/SimulatorExam.styles";
import uuid from "@/Utils/uuid";
import { addAnswer, submitAnswer } from "@/lib/SimulatorSlice";
import { MainRootState, SimulatorAppDispatch, SimulatorRootState } from "@/lib/Store";

interface AnswerType {
	id: string;
	answerAr: string;
	answerEn: string;
	isCorrect: boolean;
}

interface QuestionAndAnswerProps {
	type: "MULTIBLECHOISE" | "SINGLE" | "MATCH";
	count?: number;
	exam: string;
}

const QuestionAndAnswer = ({ type, count = 0, exam }: QuestionAndAnswerProps) => {
	const dispatch = useDispatch<SimulatorAppDispatch>();

	const { counter } = useSelector((state: MainRootState) => state.openAndClose);
	const { dirIsLTR } = useSelector((state: MainRootState) => state.ChangeDirectionAnswer);
	const { userAnswers = [], question } = useSelector(
		(state: SimulatorRootState) => state.simulator,
	);

	const [strikeThroughAnswers, setStrikeThroughAnswers] = useState<string[]>([]);
	const [wrongAnswers, setWrongAnswers] = useState<Set<string>>(new Set());

	const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

	const questionAnswers = useMemo(() => question.Answers ?? [], [question.Answers]);

	const correctAnswerIds = useMemo(
		() =>
			questionAnswers
				.filter(
					(ans: { isCorrect: boolean; id: string; answerAr: string; answerEn: string }) =>
						ans.isCorrect,
				)
				.map((ans: { id: string }) => ans.id),
		[questionAnswers],
	);

	const clearTimeouts = useCallback(() => {
		timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
		timeoutsRef.current = [];
	}, []);

	useEffect(() => {
		return () => {
			clearTimeouts();
		};
	}, [clearTimeouts]);

	const handleSelectAnswer = useCallback(
		(answer: AnswerType) => {
			const { id, isCorrect } = answer;

			if (question.mode === "LEARNING") {
				if (type === "SINGLE") {
					const userHasCorrectAlready = questionAnswers.some(
						(ans: { isCorrect: boolean; id: string }) =>
							ans.isCorrect && userAnswers.includes(ans.id),
					);
					if (userHasCorrectAlready) {
						return;
					}
				} else if (type === "MULTIBLECHOISE") {
					const userHasAllCorrect = correctAnswerIds.every((cid: string) =>
						userAnswers.includes(cid),
					);
					if (userHasAllCorrect) {
						return;
					}
				}
			}

			if (question.mode === "LEARNING" && isCorrect) {
				clearTimeouts();
				setWrongAnswers(new Set());
			}

			if (question.mode === "LEARNING" && !isCorrect) {
				dispatch(addAnswer([]));
				setWrongAnswers(prev => {
					const newSet = new Set(prev);
					newSet.add(id);
					return newSet;
				});

				const timeoutId = setTimeout(() => {
					setWrongAnswers(prev => {
						const newSet = new Set(prev);
						newSet.delete(id);
						return newSet;
					});
				}, 3000);

				timeoutsRef.current.push(timeoutId);
				return;
			}

			const updateAnswers = (answers: string[]) => {
				dispatch(addAnswer(answers));
			};

			if (type === "MULTIBLECHOISE") {
				const isSelected = userAnswers.includes(id);
				const newAnswers = isSelected
					? userAnswers.filter(i => i !== id)
					: userAnswers.length < count
						? [...userAnswers, id]
						: userAnswers;

				updateAnswers(newAnswers);
			} else if (type === "SINGLE") {
				updateAnswers([id]);
			}

			dispatch(submitAnswer(exam));
		},
		[
			type,
			count,
			userAnswers,
			question.mode,
			dispatch,
			exam,
			questionAnswers,
			correctAnswerIds,
			clearTimeouts,
		],
	);

	const handleRightClick = useCallback(
		(answerIndex: number, event: ReactMouseEvent<HTMLLIElement>) => {
			event.preventDefault();
			setStrikeThroughAnswers(prev => {
				const indexStr = answerIndex.toString();
				return prev.includes(indexStr) ? prev.filter(i => i !== indexStr) : [...prev, indexStr];
			});
		},
		[],
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			const num = parseInt(e.key, 10);
			if (!isNaN(num) && num > 0 && num <= questionAnswers.length) {
				const index = num - 1;
				const answer = questionAnswers[index];
				if (answer) {
					handleSelectAnswer(answer);
				}
			}
		},
		[questionAnswers, handleSelectAnswer],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	// const dd = {
	// 	receive: [],
	// 	drag: [],
	// 	answer: [{ receive: "1", drag: "1d" }],
	// };

	return (
		<QuestionAndAnswerShell seeAllQuestions={counter}>
			<Question
				question={dirIsLTR ? question.questionAr : question.questionEn}
				image={question.image}
			/>

			<Paragraph color="gray" className={styles.marginBottom16}>
				{type === "MATCH" ? `Drag and drop to match answers.` : `Choose ${count}`}
			</Paragraph>

			{type === "MATCH" && <DragDropComponent />}

			<ul>
				{questionAnswers.map(
					(
						answer: { id: string; isCorrect: boolean; answerAr: string; answerEn: string },
						index: number,
					) => {
						const { id } = answer;

						let status: "unselected" | "selected" | "correct" | "wrong" = "unselected";
						if (wrongAnswers.has(id)) {
							status = "wrong";
						} else if (userAnswers.includes(id)) {
							status = question.mode === "LEARNING" && answer.isCorrect ? "correct" : "selected";
						}

						return (
							<li
								key={uuid()}
								onClick={() => handleSelectAnswer(answer)}
								onContextMenu={e => handleRightClick(index, e)}
							>
								<Answer
									statusss={status}
									type={type}
									index={index + 1}
									body={dirIsLTR ? answer.answerAr : answer.answerEn}
									isCorrect={answer.isCorrect}
									isStrikethrough={strikeThroughAnswers.includes(index.toString())}
								/>
							</li>
						);
					},
				)}
			</ul>
		</QuestionAndAnswerShell>
	);
};

export default QuestionAndAnswer;
