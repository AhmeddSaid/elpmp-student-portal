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

const AllQuestion = ({ exam }: { exam: string }) => {
	const dispatch = useDispatch<typeof SimulatorStore.dispatch>();
	const { examInfo } = useSelector((state: SimulatorRootState) => state.simulator);
	const questions = examInfo.questions;
	// const flaggedIds = examInfo;
	//
	// const isFlagged = questions.filter((question: string) => {
	// 	const parsed = JSON.parse(question);
	// 	return parsed.flagged;
	// });

	return (
		<>
			<Section>
				<AllQuestionContainer>
					<AllQuestionHeader $align={"center"} $justify={"space-between"}>
						<p>Flagged questions</p>
						<button onClick={() => dispatch(openAllQuestion())}>
							<Cross />
						</button>
					</AllQuestionHeader>

					<div className={`${styles.paddingInline32}`}>
						{questions.map((question: string, index: number) => {
							const parsed = JSON.parse(question);
							return (
								<li key={uuid()} onClick={() => dispatch(jumpToQuestion({ exam, index }))}>
									<Questions key={uuid()} question={`${index + 1}.${parsed.questionEn}`} />
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
