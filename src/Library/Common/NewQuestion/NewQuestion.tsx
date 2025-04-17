"use client";
import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ArrowDown from "@/Library/Common/Icongraphy/ArrowDown/ArrowDown";
import NewFlag from "@/Library/Common/Icongraphy/NewFlag/NewFlag";
import UnFlag from "@/Library/Common/Icongraphy/UnFlag/UnFlag";
import {
	AllQuestionShell,
	ArrowShell,
	NewQuestionShell,
	QuestionNumber,
} from "@/Library/Common/NewQuestion/NewQuestion.styles";
import QuestionInfo from "@/Library/Common/QuestionInfo/QuestionInfo";

const NewQuestion = ({
	viewAnswer,
	DangerTag,
	Flagged,
}: {
	viewAnswer?: boolean;
	DangerTag?: boolean | undefined;
	Flagged?: boolean;
}) => {
	const [OpenAllQuestion, setOpenAll] = React.useState(false);

	return (
		<>
			<NewQuestionShell OpenAllQuestion={OpenAllQuestion} DangerTag={DangerTag}>
				<Flexbox className={"container"} $justify="space-between">
					<Flexbox $gap={16}>
						{Flagged ? <NewFlag /> : <UnFlag />}
						<Flexbox $gap={8}>
							<QuestionNumber>1</QuestionNumber>

							<p>Organizational process assets (OPAs)</p>
						</Flexbox>
					</Flexbox>

					<Flexbox $gap={16}>
						<div className={"tag"}>incomplete</div>

						<div className={"SeeAnswerDiv"}>
							{viewAnswer ? (
								<Flexbox onClick={() => setOpenAll(prev => !prev)} $gap={8} $align={"center"}>
									<p className={"view"}>view answer</p>

									<ArrowShell OpenAllQuestion={OpenAllQuestion}>
										<ArrowDown />
									</ArrowShell>
								</Flexbox>
							) : (
								""
							)}
						</div>
					</Flexbox>
				</Flexbox>

				<AllQuestionShell className={OpenAllQuestion ? "" : "displayNone"}>
					<QuestionInfo IconColor={"green"} />
					<QuestionInfo />
					<QuestionInfo />
					<QuestionInfo />
					<QuestionInfo IconColor={"purple"} />
					<QuestionInfo />
				</AllQuestionShell>
			</NewQuestionShell>
		</>
	);
};

export default NewQuestion;
