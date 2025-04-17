"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@/Library/Common/Button/Button";
import ExamQuestion from "@/Library/Common/ExamQuestion/ExamQuestion";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Cross from "@/Library/Common/Icongraphy/cross/Cross";
import NewAnswer from "@/Library/Common/NewAnswer/NewAnswer";
import NewExplanation from "@/Library/Common/NewExplanation/NewExplanation";
import Question from "@/Library/Common/Question/Question";
import {
	BigImage,
	DarkLayer,
	EscapeContainer,
	ImageContainer,
	QuestionImageStyles,
	QuestionShell,
} from "@/Library/Common/Question/Question.styles";
import SimulationNavBar from "@/Library/Common/SimulationNavBar/SimulationNavBar";
import {
	QuestionAndAnswerShell,
	SimulationShell,
} from "@/Library/pages/SimulatorExam/SimulatorExam.styles";
import uuid from "@/Utils/uuid";

interface Answer {
	id: string;
	answerAr: string;
	answerEn: string;
	isCorrect: string;
}

interface Question {
	questionId: {
		questionEn: string;
		image?: string;
		type: "MULTIBLECHOISE" | "SINGLECHOISE";
		explanationEn: string;
		Answers: Answer[];
	};
	flagged: boolean;
	userAnswers?: string[];
}

interface DataStructure {
	data: {
		data: Question[];
	};
}

interface DataType {
	data: DataStructure;
}

const Footer = styled.div`
	position: fixed;
	border-top: 1px solid #c3c9d1;
	bottom: 0;
	width: 100%;
	left: 0;
	background: white;
	margin-top: 80px;
	padding: 12px 64px;
`;

const Page = ({ data, examName }: { data: DataType; examName: string }) => {
	const [currentindex, setCurrentIndex] = React.useState(0);
	const [openImage, setOpenImage] = useState<boolean>(false);
	// @ts-ignore
	const QAarray = data.data.data.historyDetails[currentindex];
	// @ts-ignore
	// console.log(QAarray.questionId.Answers, "data");
	const NumOdCorrectAnswers = QAarray.questionId.Answers.filter(item => item.isCorrect === true);
	// console.log(x, "result");
	const dirIsLTR = false;
	const imageURI = `/dist/simulator/${QAarray?.questionId?.image}`;
	const handleNextQuestion = useCallback(() => {
		// @ts-ignore
		if (currentindex >= data.data.data.historyDetails.length - 1) return;
		setCurrentIndex(prev => prev + 1);
		// @ts-ignore
	}, [data.data.data.historyDetails.length, currentindex]);

	const handlePrevQuestion = useCallback(() => {
		if (currentindex <= 0) return;
		setCurrentIndex(prev => prev - 1);
	}, [currentindex]);

	const handleArrowKeyPress = useCallback(
		(e: KeyboardEvent) => {
			const ArrowPress = e.key;
			if (ArrowPress === "ArrowRight") {
				handleNextQuestion();
			} else if (ArrowPress === "ArrowLeft") {
				handlePrevQuestion();
			}
		},
		[handleNextQuestion, handlePrevQuestion],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleArrowKeyPress);

		return () => {
			document.removeEventListener("keydown", handleArrowKeyPress);
		};
	}, [handleArrowKeyPress]);

	const router = useRouter();

	return (
		<>
			<SimulationShell id={"examSimulatorShell"} className={"positionRelative"}>
				<Section as={"div"}>
					<Row>
						<Col>
							{/*<ExamBar>*/}
							{/*	/!*@ts-ignore*!/*/}
							{/*	<ExamName>{`${examName} (${data.data.data.historyCheck.mode} mode)`}</ExamName>*/}
							{/*	<Flexbox $gap={20}>*/}
							{/*		<Button*/}
							{/*			bgcolor={"primary"}*/}
							{/*			size={"xsmall"}*/}
							{/*			body={"Exit"}*/}
							{/*			icon={<Cross white />}*/}
							{/*			onclick={() => router.push("/history")}*/}
							{/*		/>*/}
							{/*	</Flexbox>*/}
							{/*</ExamBar>*/}
							<SimulationNavBar
								totalQuestion={data.data.data.historyDetails.length}
								currentQuestion={currentindex + 1}
								historyMode
								examName={examName}
							/>
						</Col>
						<Col className={styles.marginTop54} $md={8}>
							{/*<Flexbox*/}
							{/*	className={`${styles.marginTop32} ${styles.marginBottom24}`}*/}
							{/*	$justify={"space-between"}*/}
							{/*>*/}
							{/*	<QuestionInfoAndFlagIcon dirIsLTR={false} $gap={20}>*/}
							{/*		<QuestionInfo dirIsLTR={false}>*/}
							{/*			Question <span> {currentindex + 1}</span> of /!*@ts-ignore*!/*/}
							{/*			<span> {data.data.data.historyDetails.length}</span>{" "}*/}
							{/*		</QuestionInfo>*/}
							{/*		<FlagIcon isFlagged={QAarray?.flagged} />*/}
							{/*	</QuestionInfoAndFlagIcon>*/}
							{/*	<Flexbox $gap={20}>*/}
							{/*		{QAarray?.userAnswers?.length === 0 && (*/}
							{/*			<Tags*/}
							{/*				fcolor={"error"}*/}
							{/*				tagtittle={"Skipped"}*/}
							{/*				bgcolor={"error"}*/}
							{/*				size={"xsmall"}*/}
							{/*			/>*/}
							{/*		)}*/}

							{/*		{QAarray?.flagged && (*/}
							{/*			<Tags*/}
							{/*				tagtittle={"Flagged"}*/}
							{/*				bgcolor={"primary"}*/}
							{/*				size="xsmall"*/}
							{/*				fcolor={"primary"}*/}
							{/*			/>*/}
							{/*		)}*/}

							{/*		{QAarray?.userAnswers?.length > 0 && QAarray.correct && (*/}
							{/*			<Tags*/}
							{/*				tagtittle={"Correct"}*/}
							{/*				bgcolor={"success"}*/}
							{/*				size="xsmall"*/}
							{/*				fcolor={"success"}*/}
							{/*			/>*/}
							{/*		)}*/}

							{/*		{QAarray?.userAnswers?.length > 0 && !QAarray.correct && (*/}
							{/*			<Tags tagtittle={"Wrong"} bgcolor={"error"} size="xsmall" fcolor={"error"} />*/}
							{/*		)}*/}
							{/*	</Flexbox>*/}
							{/*</Flexbox>*/}

							<Flexbox className={styles.marginTop40} $gap={50}>
								<QuestionAndAnswerShell seeAllQuestions={false}>
									{/*<Question*/}
									{/*	question={QAarray?.questionId?.questionEn}*/}
									{/*	image={QAarray?.questionId?.image}*/}
									{/*/>*/}

									<ExamQuestion
										NumOdCorrectAnswers={NumOdCorrectAnswers.length}
										QAarray={QAarray}
										isAnswered
										question={QAarray?.questionId?.questionEn}
									/>

									{QAarray?.questionId?.Answers.map(
										(
											answer: { id: string; answerAr: string; answerEn: string; isCorrect: string },
											index: number,
										) => {
											const isAnswered = QAarray.userAnswers.length > 0;
											let statusss = "unselected";

											if (!isAnswered && answer.isCorrect) {
												statusss = "correct";
											}

											if (isAnswered && QAarray.userAnswers.includes(answer.id)) {
												if (answer.isCorrect) {
													statusss = "correct";
												} else {
													statusss = "wrong";
												}
											}

											if (isAnswered && !QAarray.userAnswers.includes(answer.id)) {
												if (answer.isCorrect) {
													statusss = "correct";
												}
											}

											// if(isAnswered)

											// const statusss = QAarray.userAnswers?.includes(answer.id)
											// 	? "correct"
											// 	: "unselected";

											return (
												<>
													<li key={index}>
														<NewAnswer
															isAnswered={true}
															key={uuid()}
															type={"multi"}
															state={statusss}
															body={answer.answerEn}
															questionNumber={index + 1}
														/>

														{/*@ts-ignore*/}
														{/*<AnswerContainer isAnswered statusss={statusss}>*/}
														{/*	<Flexbox $justify={"space-between"} $gap={24}>*/}
														{/*		<AnswerBody dirIsLTR={false}>*/}
														{/*			<IndexStyles>{index + 1}</IndexStyles>*/}
														{/*			{QAarray.questionId.type === "MULTIBLECHOISE" && (*/}
														{/*				<Checkbox*/}
														{/*					id={index.toString()}*/}
														{/*					checked={QAarray.userAnswers.includes(answer.id)}*/}
														{/*					value={index}*/}
														{/*					name={index.toString()}*/}
														{/*					label={""}*/}
														{/*				/>*/}
														{/*			)}*/}
														{/*			<p>{answer.answerEn}</p>*/}
														{/*		</AnswerBody>*/}
														{/*		/!*<AnswerIndex dirIsLTR={dirIsLTR} $gap={16}>*!/*/}
														{/*		/!*	{open && isCorrect && (*!/*/}
														{/*		/!*		<Tags*!/*/}
														{/*		/!*			fcolor={"success"}*!/*/}
														{/*		/!*			bgcolor={"success"}*!/*/}
														{/*		/!*			tagtittle={"Correct Answer"}*!/*/}
														{/*		/!*			size={"xsmall"}*!/*/}
														{/*		/!*		/>*!/*/}
														{/*		/!*	)}*!/*/}
														{/*		/!*</AnswerIndex>*!/*/}
														{/*	</Flexbox>*/}
														{/*</AnswerContainer>*/}

														{/*<Answer*/}
														{/*	statusss={*/}
														{/*		QAarray.userAnswers?.includes(answer.id) ? "selected" : "unselected"*/}
														{/*	}*/}
														{/*	type={QAarray.questionId.type}*/}
														{/*	index={index + 1}*/}
														{/*	isAnswered={false}*/}
														{/*	// @ts-ignore*/}
														{/*	body={answer.answerEn}*/}
														{/*	isCorrect={false}*/}
														{/*	isStrikethrough={false}*/}
														{/*/>*/}
													</li>
												</>
											);
										},
									)}
								</QuestionAndAnswerShell>

								{/*<AllQuestionList seeAllQuestions={counter}>*/}
								{/*	<AllQuestion exam={exam} />*/}
								{/*</AllQuestionList>*/}
							</Flexbox>
						</Col>

						<Col className={styles.marginTop54} $md={4}>
							<QuestionShell $align={"center"} $justify={"space-between"}>
								{QAarray?.questionId?.image && (
									<QuestionImageStyles
										onClick={() => setOpenImage(prev => !prev)}
										width={416}
										height={460}
										src={imageURI}
										alt={""}
										quality={100}
										dirIsLTR={dirIsLTR}
									/>
								)}
							</QuestionShell>

							<Flexbox $justify={"center"}>
								<BigImage className={`${openImage ? "" : "displayNone"}`}>
									<ImageContainer
										width={1000}
										height={1000}
										src={imageURI}
										alt={""}
										dirIsLTR={dirIsLTR}
									/>

									<EscapeContainer onClick={() => setOpenImage(prev => !prev)}>
										<Flexbox>
											<p>Close</p>
											<Cross />
										</Flexbox>
									</EscapeContainer>
								</BigImage>
							</Flexbox>

							<DarkLayer
								onClick={() => setOpenImage(prev => !prev)}
								className={`${openImage ? "" : "displayNone"}`}
							></DarkLayer>
						</Col>
						<Col $md={8}>
							<div className={styles.paddingTop16}>
								{/*<Explanation body={QAarray?.questionId?.explanationEn} />*/}
								<NewExplanation body={QAarray?.questionId?.explanationEn} openExplenation={false} />
							</div>
						</Col>
					</Row>
					<Footer>
						<Row>
							<Col>
								<Flexbox $align={"center"} $justify={"end"} $gap={20}>
									<Button
										disabled={currentindex === 0}
										onclick={handlePrevQuestion}
										body={"Previous"}
										bgcolor={"gost"}
									/>

									<Button
										//@ts-ignore
										onclick={handleNextQuestion}
										//@ts-ignore
										disabled={currentindex >= data?.data?.data?.historyDetails?.length - 1}
										body={"Next"}
										bgcolor={"primary"}
									/>
								</Flexbox>
							</Col>
						</Row>
					</Footer>
				</Section>
			</SimulationShell>
		</>
	);
};
export default Page;
