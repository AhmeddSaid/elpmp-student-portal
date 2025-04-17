import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	AllQuestionContainer,
	AllQuestionHeader,
} from "@/Library/Common/AllQuestion/AllQuestion.styles";
import Questions from "@/Library/Common/AllQuestion/Questions";
import { Section } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import Cross from "@/Library/Common/Icongraphy/cross/Cross";
import uuid from "@/Utils/uuid";
import { openAllQuestion } from "@/lib/OpenAndCloseAllQuestion";
import { jumpToQuestion } from "@/lib/SimulatorSlice";
import { SimulatorRootState, SimulatorStore } from "@/lib/Store";

const AllQuestion = ({ exam, maxQuestions }: { exam: string; maxQuestions?: number }) => {
	const dispatch = useDispatch<typeof SimulatorStore.dispatch>();
	const { examInfo, question } = useSelector((state: SimulatorRootState) => state.simulator);
	const questions = examInfo.questions;

	return (
		<>
			<Section>
				<AllQuestionContainer>
					<AllQuestionHeader $align={"center"} $justify={"space-between"}>
						<p>All Question</p>

						<button onClick={() => dispatch(openAllQuestion())}>
							<Cross />
						</button>
					</AllQuestionHeader>

					<div className={`${styles.paddingInline32}`}>
						{questions.map((item: string, index: number) => {
							const parsed = JSON.parse(item);
							return (
								<li
									key={uuid()}
									onClick={() => {
										if (
											(question.mode === "LEARNING" &&
												index > (maxQuestions ?? examInfo.questions.length)) ||
											question.currentQuestion === index + 1
										)
											return;

										dispatch(jumpToQuestion({ exam, index }));
									}}
								>
									<Questions
										dimmed={
											(question.mode === "LEARNING" &&
												index > (maxQuestions ?? examInfo.questions.length)) ||
											question.currentQuestion === index + 1
										}
										key={uuid()}
										question={`${index + 1}.${parsed.questionEn}`}
									/>
								</li>
							);
						})}
					</div>
				</AllQuestionContainer>
			</Section>
		</>
	);
};

export default AllQuestion;
