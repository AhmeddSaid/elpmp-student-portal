"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { SubExamAr, SubExamEn } from "../../../../messages/Exam/SubExam";
import ExamInfo from "./ExamInfo";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import ContinuCard from "@/Library/Common/ContinuCard/ContinuCard";
import ExamHistoryCardShell from "@/Library/Common/ExamHistoryCardShell/ExamHistoryCardShell";
import ExamMode from "@/Library/Common/ExamMode/ExamMode";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Clock from "@/Library/Common/Icongraphy/Clock/Clock";
import CrossIcon from "@/Library/Common/Icongraphy/CrossIcon/CrossIcon";
import PlayIcon from "@/Library/Common/Icongraphy/PlayIcon/PlayIcon";
import QuestionMarkLine from "@/Library/Common/Icongraphy/QuestionMarkLime/QuestionMarkLine";
import StarLine from "@/Library/Common/Icongraphy/StarLine/StarLine";
import Cross from "@/Library/Common/Icongraphy/cross/Cross";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import TabsComponent from "@/Library/Common/Tap/Tabs";
import { BigParagraph } from "@/Library/Common/Typograhy/Typography";
import {
	ExamInfoSection,
	ExamModesBk,
	ExamModesShell,
	ExamPageShell,
	ExamPageShellContainer,
	PopUpRatingShell,
} from "@/Library/pages/ExamPage/ExamPage.styles";
import SubExamReview from "@/Library/pages/SubExamReview/SubExamReview";
import { StartExamAction } from "@/app/[locale]/(exams)/exam/[examName]/[subExamName]/action";
import { openAndClosePopUp } from "@/lib/OpenAndClosePopUp";
import { isEnrolledChange } from "@/lib/isEnrolled";

export enum ExamModes {
	LEARNING,
	ADVANCED,
	REAL,
}

const Exam2Page = ({
	activeSubExam,
	PassingScore = "80",
	durationPrtExam,
	questionsCount,
	data,
	examDiscussion,
	name,
	desc,
	subExamId,
	locale,
	SubExamNameSlug,
	ExamNameSlug,
	res,
}: {
	// @ts-ignore
	activeSubExam: {
		nameEn: string;
		nameAr: string;
		progress: number;
		key: string;
	}[];
	ExamNameSlug: string;
	SubExamNameSlug: string;
	durationPrtExam?: string;
	PassingScore?: string;
	questionsCount?: string;
	examDiscussion?: {
		id: string;
		comment: string;
		createdAt: string;
		totalLikes: string;
		userId: { UserInformation: { firstName: string; lastName: string }[] };
	}[];
	name: string;
	desc: string;
	subExamId: string;
	data: {
		user: {
			id: string;
			createdAt: string;
			rating: number;
			title: string;
			comment: string;
			totalLikes: string;
			userId: {
				UserInformation: { firstName: string; lastName: string }[];
			};
		};
		averageRating: number;
		totalReviews: number;
		Rating: [];
		subExamReview: {
			userId: { UserInformation: { firstName: string; lastName: string }[] };
			createdAt: string;
			rating: number;
			comment: string;
			title: string;
			totalLikes: string;
		}[];
	};
	res: {
		data: {
			data: {
				data: { id: string };
			};
		};
	};
} & Locale) => {
	const t = locale === "en" ? SubExamEn : SubExamAr;
	const titles = [
		"Take Your Time: Pause the test at any point and resume when ready.",
		"Unlimited Attempts: Retake the test as many times as you like to improve your skills.",
		"Track Your Progress: The progress bar will show your progress and remaining time. Don’t stress if time runs out—you can still complete the test.",
		"Skip and Return: Stuck on a question? Skip it and come back to it later.",
		'Flag for Review: Highlight uncertain questions with "Mark for Review" to revisit them before submission.',
		"Save as You Go: Your answers are saved automatically as you move through the test.",
		"Final Submission: You’ll be prompted to confirm before submitting your test to ensure everything is complete.",
		"Time Alerts: Receive a time warning when 5 minutes remain, helping you manage your final moments.",
		"See Results Instantly: Once you press the stop button, you’ll get your results immediately.",
		"Navigation: Move freely between questions anytime—go back, review, and adjust your answers.",
	];

	const router = useRouter();
	const [genrating, setgenrating] = React.useState(false);
	const [mode, setMode] = useState<number | null>(1);
	const [modePopup, setModePopup] = useState(false);
	const handleStartExam = async () => {
		if (mode === null) {
			toast.error("Please choose exam mode.");
			return;
		}
		setgenrating(true);
		const action = await StartExamAction(subExamId, mode);
		if (action.status === 200) {
			router.push(`/simulator/${action.url}`);
		} else {
			toast.error("Something went wrong");
		}
		setgenrating(false);
	};

	// @ts-ignore
	const { popUpIsOpen } = useSelector(state => state.PopUp);

	const dispatch = useDispatch();

	return (
		<>
			<ExamPageShellContainer>
				<ExamPageShell>
					<PopUpRatingShell RatingPopUp={popUpIsOpen}>
						<div className={"PopUpContanier"}>
							<Flexbox $justify={"space-between"} className={"PopUpHeader"}>
								<p>Write a review</p>
								<div
									onClick={() => {
										dispatch(openAndClosePopUp());
									}}
								>
									<CrossIcon />
								</div>
							</Flexbox>
							<SubExamReview subExamID={res.data?.data?.data?.id} />
						</div>
					</PopUpRatingShell>
					<ExamInfoSection className={"Exam2pageHeader"}>
						<PageHeader title={name} subTitle={desc} />
						<Row className={styles.paddingTop16} $justify={"space-between"}>
							<Col $sm={12} $md={3} className={"ExamInfo"}>
								<ExamInfo
									title={`${Math.floor(Number(durationPrtExam))} ${t.time}`}
									body={t.examTime}
									icon={<Clock />}
								/>
							</Col>
							<Col $sm={12} $md={3} className={"ExamInfo"}>
								<ExamInfo
									title={`${questionsCount} ${t.question}`}
									body={t.numOfQuestion}
									icon={<QuestionMarkLine />}
								/>
							</Col>
							<Col $sm={12} $md={3} className={"ExamInfo"}>
								<ExamInfo title={`${PassingScore}% `} body={t.score} icon={<StarLine />} />
							</Col>
						</Row>
					</ExamInfoSection>

					<div
						className={`${styles.marginTop48} ${styles.marginBottom16}`}
						onClick={() => dispatch(isEnrolledChange())}
					>
						{activeSubExam.length <= 0 && (
							<>
								<Button
									loading={genrating}
									onclick={() => handleStartExam()}
									body={genrating ? "Loading..." : t.examButton}
									icon={<PlayIcon />}
								/>
							</>
						)}
					</div>
				</ExamPageShell>
				<ContinuCard activeSubExam={activeSubExam} state={"completed"} />
				<div className={styles.marginTop54}>
					<ExamHistoryCardShell header={"Instructions"} titles={titles} />
				</div>

				<TabsComponent
					RatingPopUp={popUpIsOpen}
					SubExamNameSlug={SubExamNameSlug}
					ExamNameSlug={ExamNameSlug}
					locale={locale}
					subExamId={subExamId}
					examDiscussion={examDiscussion}
					data={data}
				/>
			</ExamPageShellContainer>

			{modePopup && (
				<>
					<ExamModesBk
						onClick={() => {
							setModePopup(false);
							setMode(null);
						}}
					/>
					<ExamModesShell>
						<Flexbox $justify={"space-between"}>
							<BigParagraph bold>Choose your exam mode</BigParagraph>
							<button
								onClick={() => {
									setModePopup(false);
									setMode(null);
								}}
							>
								<Cross />
							</button>
						</Flexbox>
						<Row>
							<Col $md={4} $sm={11}>
								<div
									onClick={() => {
										if (genrating) return;
										setMode(0);
									}}
								>
									<ExamMode
										title={"Learning Mode"}
										describtion={[
											{ name: "Time", active: false },
											{ name: "Continue after time ends", active: true },
											{ name: "Show correct answer", active: true },
											{ name: "Show question explanation", active: true },
											{ name: "Calculate score", active: false },
											{ name: "Jump to upcoming question.", active: false },
										]}
										isSelected={mode === 0}
									/>
								</div>
							</Col>
							<Col $md={4}>
								<div
									onClick={() => {
										if (genrating) return;
										setMode(1);
									}}
								>
									<ExamMode
										title={"Advanced Mode"}
										describtion={[
											{ name: "Time", active: true },
											{ name: "Continue after time ends", active: true },
											{ name: "Show correct answer", active: true },
											{ name: "Show question explanation", active: true },
											{ name: "Calculate score", active: true },
											{ name: "Jump to upcoming question.", active: true },
										]}
										isSelected={mode === 1}
									/>
								</div>
							</Col>
							<Col $md={4}>
								<div
									onClick={() => {
										if (genrating) return;
										setMode(2);
									}}
								>
									<ExamMode
										title={"Real Mode"}
										describtion={[
											{ name: "Time", active: true },
											{ name: "Continue after time ends", active: false },
											{ name: "Show correct answer", active: false },
											{ name: "Show question explanation", active: false },
											{ name: "Calculate score", active: true },
											{ name: "Jump to upcoming question.", active: true },
										]}
										isSelected={mode === 2}
									/>
								</div>
							</Col>
						</Row>
						<Flexbox $justify={"center"} className={styles.marginTop54}>
							<Button
								body={"Start Exam"}
								size={"small"}
								disabled={mode === null}
								onclick={() => handleStartExam()}
								loading={genrating}
							/>
						</Flexbox>
					</ExamModesShell>
				</>
			)}
		</>
	);
};

export default Exam2Page;
