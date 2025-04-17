import React, { ReactNode } from "react";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row, Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import ArrowRight from "@/Library/Common/Icongraphy/ArrowRight/ArrowRight";
import Check from "@/Library/Common/Icongraphy/Check/Check";
import FileCheckIcon from "@/Library/Common/Icongraphy/FileCheckIcon/FileCheckIcon";
import FileListIcon from "@/Library/Common/Icongraphy/FileListIcon/FileListIcon";
import GrayClock from "@/Library/Common/Icongraphy/GrayClock/GrayClock";
import Separator from "@/Library/Common/Separator/Separator";
import {
	HeadingXSmall,
	LabelMedium,
	LabelSmall,
	ParagraphSmall,
} from "@/Library/Common/Typograhy/Typography";
import ExamModeCard from "@/Library/pages/Instructions/ExamModeCard/ExamModeCard";
import InstructionBox from "@/Library/pages/Instructions/InstructionBox/InstructionBox";
import {
	InstructionCaptionShell,
	InstructionExamModeShell,
	InstructionFooter,
	InstructionsHeader,
	InstructionsTableShell,
	RecommendationBox,
} from "@/Library/pages/Instructions/Instructions.styles";
import uuid from "@/Utils/uuid";

const Instructions = ({ data }: { data: [] }) => {
	const instructionBoxData = [
		{
			icon: <FileListIcon />,
			title: data.data.tagId.questionsCount,
			body: "Questions",
		},
		{
			icon: <GrayClock />,
			title: data.duration,
			body: "Minutes",
		},
		{
			icon: <FileCheckIcon />,
			title: "80%",
			body: "Required score to pass",
		},
	];
	const instructionData = [
		"You can pause the test at any time and resume later.",
		"The progress bar at the top of the screen will show you progress as well as the time remaining in the test. If you run out of time, don't worry; you will still be able to finish the test.",
		"You can skip a question to come back to at the end of the exam.",
		'You can also use "Mark for review" to come back to questions you are unsure about before you submit your test.',
		'You can also use "Mark for review" to come back to questions you are unsure about before you submit your test.',
	];
	const examModesTabelData = [
		{ name: "Time", beginner: false, intermediate: true, Advanced: true },
		{ name: "Continue after time ends", beginner: true, intermediate: true, Advanced: false },
		{ name: "Show correct answer", beginner: true, intermediate: true, Advanced: false },
		{ name: "Show question explanation", beginner: true, intermediate: true, Advanced: false },
		{ name: "Calculate score", beginner: false, intermediate: true, Advanced: true },
		{ name: "Jump to upcoming question.", beginner: false, intermediate: true, Advanced: true },
	];
	return (
		<>
			<InstructionsHeader>
				<Section>
					<HeadingXSmall>{data.data.nameEn}</HeadingXSmall>
				</Section>
			</InstructionsHeader>
			<Section>
				<Row>
					<Col $lg={6}>
						<InstructionCaptionShell>
							<div className={`${styles.marginBottom32}`}>
								<Flexbox $gap={8}>
									{instructionBoxData.map(
										(item: { icon: ReactNode; title: string; body: string }) => (
											<InstructionBox key={uuid()} {...item} />
										),
									)}
								</Flexbox>
							</div>
							<HeadingXSmall className={`${styles.marginBottom8}`}>Instructions</HeadingXSmall>
							<Flexbox $direction={"column"} as={"ul"} $gap={8}>
								{instructionData.map((item: string, index) => (
									<li key={uuid()}>
										<LabelMedium color={"var(--Text-text-secondary, #626D7C)"}>
											{index + 1}. {item}
										</LabelMedium>
									</li>
								))}
							</Flexbox>
						</InstructionCaptionShell>
					</Col>
					<Col $lg={6}>
						<InstructionExamModeShell>
							<div className={`${styles.marginBottom16}`}>
								<Flexbox $direction={"column"} $gap={4}>
									<HeadingXSmall>Exam mode</HeadingXSmall>
									<LabelMedium color={"var(--Text-text-secondary, #626D7C)"}>
										Please choose your preferred mode
									</LabelMedium>
								</Flexbox>
							</div>
							<div className={`${styles.marginBottom32}`}>
								<Flexbox $gap={12}>
									<ExamModeCard
										id={"BeginnerMode"}
										value={"Beginner mode"}
										name={"exam mode"}
										header={"Beginner mode"}
									/>
									<ExamModeCard
										id={"IntermediateMode"}
										value={"Intermediate mode"}
										name={"exam mode"}
										header={"Intermediate mode"}
									/>
									<ExamModeCard
										id={"AdvancedMode"}
										value={"Advanced mode"}
										name={"exam mode"}
										header={"Advanced mode"}
									/>
								</Flexbox>
							</div>
							<InstructionsTableShell>
								<table>
									<thead>
										<tr>
											<th>
												<div></div>
											</th>
											<th>
												<div>
													<LabelSmall color={"var(--Text-text-primary, #000)"}>
														Beginner mode
													</LabelSmall>
												</div>
											</th>{" "}
											<th>
												<LabelSmall color={"var(--Text-text-primary, #000)"}>
													Intermediate mode
												</LabelSmall>
											</th>{" "}
											<th>
												<LabelSmall color={"var(--Text-text-primary, #000)"}>
													Advanced mode
												</LabelSmall>
											</th>
										</tr>
									</thead>
									<tbody>
										{examModesTabelData.map(mode => (
											<tr key={uuid()}>
												<td>
													<LabelSmall color={"var(--Text-text-primary, #000)"}>
														{mode.name}
													</LabelSmall>
												</td>
												<td>{mode.beginner ? <Check /> : <LabelSmall>-</LabelSmall>}</td>
												<td>{mode.intermediate ? <Check /> : <LabelSmall>-</LabelSmall>}</td>
												<td> {mode.Advanced ? <Check /> : <LabelSmall>-</LabelSmall>}</td>
											</tr>
										))}
									</tbody>
								</table>
							</InstructionsTableShell>

							<Separator />
							<RecommendationBox $direction={"column"} $gap={8}>
								<Flexbox $gap={8}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M14.0002 4.66665C8.8455 4.66665 4.66683 8.84532 4.66683 14C4.66683 19.1546 8.8455 23.3333 14.0002 23.3333C19.1548 23.3333 23.3335 19.1546 23.3335 14C23.3335 8.84532 19.1548 4.66665 14.0002 4.66665ZM2.3335 14C2.3335 7.55666 7.55684 2.33331 14.0002 2.33331C20.4435 2.33331 25.6668 7.55666 25.6668 14C25.6668 20.4433 20.4435 25.6666 14.0002 25.6666C7.55684 25.6666 2.3335 20.4433 2.3335 14Z"
											fill="#4A2BE9"
										/>
										<path
											d="M14.0002 8.16669C13.3558 8.16669 12.8335 8.68902 12.8335 9.33335C12.8335 9.97769 13.3558 10.5 14.0002 10.5C14.6445 10.5 15.1668 9.97769 15.1668 9.33335C15.1668 8.68902 14.6445 8.16669 14.0002 8.16669Z"
											fill="#4A2BE9"
										/>
										<path
											d="M15.1668 14C15.1668 13.3557 14.6445 12.8334 14.0002 12.8334C13.3558 12.8334 12.8335 13.3557 12.8335 14V18.6667C12.8335 19.311 13.3558 19.8334 14.0002 19.8334C14.6445 19.8334 15.1668 19.311 15.1668 18.6667V14Z"
											fill="#4A2BE9"
										/>
									</svg>
									<LabelMedium color={"var(--Text-text-info, #4A2BE9)"}>Recommendation</LabelMedium>
								</Flexbox>
								<ParagraphSmall>
									We highly recommend taking the exam in the learning mode for the first time, this
									ensures having the standard practicing method
								</ParagraphSmall>
							</RecommendationBox>
						</InstructionExamModeShell>
					</Col>
				</Row>
			</Section>
			<InstructionFooter>
				<Section>
					<Flexbox $justify={"end"} $align={"center"}>
						<Button body={"Start exam"} size={"medium"} SecondIcon={<ArrowRight />} />
					</Flexbox>
				</Section>
			</InstructionFooter>
		</>
	);
};

export default Instructions;
