"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Locale } from "@/Global";
import AllQuestion from "@/Library/Common/AllQuestion/AllQuestion";
import { IconStyles } from "@/Library/Common/Answer/Answer.styles";
import Button from "@/Library/Common/Button/Button";
import { ButtonStyle } from "@/Library/Common/Button/Button.styles";
import Explanation from "@/Library/Common/Explanation/Explanation";
import { ExamBar, ExamName } from "@/Library/Common/Explanation/Explanation.styles";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Calculator from "@/Library/Common/Icongraphy/Calculator/Calculator";
import EyeIcon from "@/Library/Common/Icongraphy/EyeIcon/EyeIcon";
import FlagIcon from "@/Library/Common/Icongraphy/FlagIcon/FlagIcon";
import SavedIcon from "@/Library/Common/Icongraphy/SavedIcon/SavedIcon";
import WhiteBoard from "@/Library/Common/Icongraphy/WhiteBoared/WhiteBoard";
import Cross from "@/Library/Common/Icongraphy/cross/Cross";
import ProgressBar from "@/Library/Common/ProgressBar/ProgressBar";
import { Paragraph } from "@/Library/Common/Typograhy/Typography";
import QuestionSpinner from "@/Library/Common/skeleton/QuestionSpinner";
import ReportExam from "@/Library/pages/Report/ReportExam";
import QuestionAndAnswer from "@/Library/pages/SimulatorExam/QuestionAndAnswer";
import {
	AllQuestionList,
	ButtonSection,
	ExitBackGround,
	ExitDiv,
	QuestionInfo,
	QuestionInfoAndFlagIcon,
	SimulationShell,
} from "@/Library/pages/SimulatorExam/SimulatorExam.styles";
import { openAllQuestion } from "@/lib/OpenAndCloseAllQuestion";
import { ShowExp } from "@/lib/ShowExplenation";
import {
	addAnswer,
	endExam,
	flagQuestion,
	getExamSuccess,
	nextQuestion,
	prevQuestion,
	questionReceived,
	setExit,
	setLoadQuestion,
	unflagQuestion,
} from "@/lib/SimulatorSlice";
import socket from "@/lib/SocketIOSetup";
import { MainRootState, SimulatorAppDispatch, SimulatorRootState } from "@/lib/Store";

const SimulatorExam = ({ exam, locale }: { exam: string } & Locale) => {
	const dispatch = useDispatch<SimulatorAppDispatch>();
	const { counter } = useSelector((state: MainRootState) => state.openAndClose);
	const { dirIsLTR } = useSelector((state: MainRootState) => state.ChangeDirectionAnswer);
	const { open } = useSelector((state: MainRootState) => state.openAndHideExp);
	const [ended, setEnded] = React.useState<boolean>(false);
	const [finalScore, setFinalScore] = React.useState<number>(0);
	// const { userAnswers } = useSelector((state: SimulatorRootState) => state.simulator);

	const { examInfo, question, loadQuestion, exit } = useSelector(
		(state: SimulatorRootState) => state.simulator,
	);

	// const handleClick = () => {
	// 	dispatch(ChangeDirection());
	// };

	function exitExam() {
		dispatch(setExit(!exit));
	}

	// function pauseExam() {
	// 	dispatch(setPause(!pause));
	// }

	const router = useRouter();

	useEffect(() => {
		socket.emit("get_exam", exam);

		socket.on("exam_ended", (data: { scorePercentage: number }) => {
			const { scorePercentage } = data;
			setFinalScore(scorePercentage);
			setEnded(true);
		});

		// socket.on("connect", x => {
		// 	console.log("Socet connected", x);
		// });
		//
		// socket.on("disconnect", () => {
		// 	console.log("Socet dis connected");
		// });

		socket.on("not_found", () => {
			router.replace("/404");
		});

		socket.on("get_exam", data => {
			dispatch(getExamSuccess(JSON.parse(data)));
		});

		socket.on("question", data => {
			dispatch(addAnswer(data.userAnswers));
			dispatch(questionReceived(data));
			dispatch(setLoadQuestion(false));
		});

		socket.on("no_continue", () => {
			toast.error("Answer this question before you can continue");
			dispatch(setLoadQuestion(false));
		});

		return () => {
			socket.off("question");
			socket.off("no_continue");
			socket.off("not_found");
			socket.off("exam_ended");
			socket.off("get_exam");
		};
	}, [dispatch, exam, router]);

	const handleNextQuestion = useCallback(() => {
		if (question?.currentQuestion >= question?.totalQuestions) return;
		dispatch(nextQuestion(exam));
	}, [dispatch, question, exam]);

	const handlePrevQuestion = useCallback(() => {
		if (question?.currentQuestion <= 1) return;
		dispatch(prevQuestion(exam));
	}, [dispatch, question, exam]);

	const handleArrowKeyPress = useCallback(
		(e: KeyboardEvent) => {
			const ArrowPress = e.key;
			if (ArrowPress === "ArrowRight") {
				handleNextQuestion();
			} else if (ArrowPress === "ArrowLeft") {
				handlePrevQuestion();
			} else if (ArrowPress === "s") {
				dispatch(ShowExp());
			}
		},
		[dispatch, handleNextQuestion, handlePrevQuestion],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleArrowKeyPress);

		return () => {
			document.removeEventListener("keydown", handleArrowKeyPress);
		};
	}, [handleArrowKeyPress]);

	// @ts-ignore
	// @ts-ignore

	// @ts-ignore
	return (
		<>
			{!ended && (
				<SimulationShell id={"examSimulatorShell"} className={"positionRelative"}>
					<Section as={"div"}>
						<Row $justify="center">
							<Col>
								<ExamBar>
									<ExamName>{locale === "ar" ? examInfo?.nameAr : examInfo?.nameEn}</ExamName>
									<Flexbox $gap={20}>
										<Button
											onclick={() => router.push("/")}
											bgcolor={"secondary"}
											size={"xsmall"}
											body={"Continue later"}
										/>

										<Button
											bgcolor={"primary"}
											size={"xsmall"}
											body={"End exam"}
											icon={<Cross white />}
											onclick={() => exitExam()}
										/>
									</Flexbox>
								</ExamBar>
							</Col>
							<Col $md={10}>
								<Flexbox
									className={`${styles.paddingTop80} ${styles.paddingBottom24}`}
									$gap={32}
									$justify={"space-between"}
									$align={"center"}
								>
									{question.mode !== "LEARNING" && (
										// <Flexbox $gap={10} $align={"center"}>
										// 	<Timer
										// 		timeInSeconds={question?.remainingTime}
										// 		totalTime={question?.totalTime}
										// 	/>
										// </Flexbox>
									)}

									<ProgressBar progress={Number(question?.progress)} width={"fullWidth"} />

									<Flexbox $gap={10}>
										<Link target={"_blank"} href={"https://calculator.elpmp.com"}>
											<Button
												buttonType={"button"}
												bgcolor={"secondary"}
												size={"xsmall"}
												body={"Calculator"}
												icon={<Calculator />}
											/>
										</Link>
										<Link target={"_blank"} href={"https://whiteBoard.elpmp.com"}>
											<Button
												buttonType={"button"}
												bgcolor={"secondary"}
												size={"xsmall"}
												body={"Whiteboard"}
												icon={<WhiteBoard />}
											/>
										</Link>
									</Flexbox>
								</Flexbox>
								<Flexbox $justify={"space-between"}>
									<QuestionInfoAndFlagIcon dirIsLTR={dirIsLTR} $gap={20}>
										<QuestionInfo dirIsLTR={dirIsLTR}>
											Question <span> {question?.currentQuestion}</span> of{" "}
											<span> {question?.totalQuestions}</span>{" "}
										</QuestionInfo>

										<ButtonStyle
											disabled={false}
											$bgcolor={"secondary"}
											size={"xsmall"}
											onClick={
												question?.isFlagged
													? () => dispatch(unflagQuestion(exam))
													: () => dispatch(flagQuestion(exam))
											}
											type={"button"}
										>
											<Flexbox $gap={10} $align={"center"}>
												<FlagIcon isFlagged={question?.isFlagged} />
												<Paragraph>
													{question?.isFlagged ? "Unflag question" : "Flag question"}
												</Paragraph>
											</Flexbox>
										</ButtonStyle>
									</QuestionInfoAndFlagIcon>
									{loadQuestion && <QuestionSpinner />}
								</Flexbox>

								<Flexbox $gap={50}>
									<QuestionAndAnswer
										exam={exam}
										type={question?.type}
										count={question.answersCount}
									/>
									<AllQuestionList seeAllQuestions={counter}>
										<AllQuestion exam={exam} maxQuestions={question?.maxQuestion} />
									</AllQuestionList>

									{/*<AllQuestionList seeAllQuestions={counter}>*/}
									{/*	<AllFlagged exam={exam} />*/}
									{/*</AllQuestionList>*/}
								</Flexbox>
							</Col>
							<Col $md={10}>
								{open && question.mode !== "REAL" && (
									<div className={styles.paddingTop16}>
										<Explanation
											body={dirIsLTR ? question?.explanationAr : question?.explanationEn}
										/>
									</div>
								)}
							</Col>
						</Row>

						<ButtonSection>
							<Flexbox $gap={16}>
								{/*<IconStyles type={"button"} onClick={handleClick}>*/}
								{/*	<Translate />*/}
								{/*</IconStyles>*/}
								<IconStyles onClick={() => dispatch(openAllQuestion())} type={"button"}>
									<SavedIcon />
								</IconStyles>
								{question.mode !== "REAL" && (
									<IconStyles onClick={() => dispatch(ShowExp())} type={"button"}>
										<EyeIcon />
									</IconStyles>
								)}
							</Flexbox>

							<Flexbox $align={"center"} $gap={20}>
								<Button
									disabled={question?.currentQuestion === 1}
									onclick={handlePrevQuestion}
									size={"xsmall"}
									body={"Previous"}
									bgcolor={"gost"}
								/>

								{question?.currentQuestion === question?.totalQuestions ? (
									<Button
										//@ts-ignore
										onclick={() => dispatch(exitExam)}
										size={"xsmall"}
										body={"Finish Exam"}
										bgcolor={"primary"}
									/>
								) : (
									<Button
										//@ts-ignore
										onclick={handleNextQuestion}
										size={"xsmall"}
										body={"Next"}
										bgcolor={"primary"}
									/>
								)}
							</Flexbox>
						</ButtonSection>

						<ExitBackGround exit={exit}>
							<ExitDiv>
								<p>Are you sure you want to exit the exam?</p>

								<Flexbox $gap={10} $justify={"end"}>
									<Button body={"Exit"} size={"xsmall"} onclick={() => dispatch(endExam(exam))} />
									<Button
										body={"Cancel"}
										size={"xsmall"}
										bgcolor={"secondary"}
										onclick={exitExam}
									/>
								</Flexbox>
							</ExitDiv>
						</ExitBackGround>

						{/*<PauseBackGround pause={pause}>*/}
						{/*	<Heading2>Exam is Paused</Heading2>*/}
						{/*	<Button body={"Resume"} size={"xsmall"} bgcolor={"primary"} />*/}
						{/*</PauseBackGround>*/}
					</Section>
				</SimulationShell>
			)}

			{ended && <ReportExam title={finalScore.toString()} subtitle={"Your Score"} score={85} />}
		</>
	);
};

export default SimulatorExam;
