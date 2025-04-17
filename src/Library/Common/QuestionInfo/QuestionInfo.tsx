import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import GreenRightIcon from "@/Library/Common/Icongraphy/GreenRightIcon/GreenRightIcon";
import PurpleRightIcon from "@/Library/Common/Icongraphy/PurpleRightIcon/PurpleRightIcon";
import { AnswerNumber } from "@/Library/Common/NewAnswer/NewAnswer.styles";
import { QuestionInfoShell } from "@/Library/Common/NewQuestion/NewQuestion.styles";

const QuestionInfo = ({ IconColor }: { IconColor?: "green" | "purple" }) => {
	return (
		<>
			<QuestionInfoShell>
				<Flexbox $justify="space-between">
					<Flexbox $gap={16}>
						<AnswerNumber>1</AnswerNumber>
						<p>Organizational process assets (OPAs)</p>
					</Flexbox>

					{IconColor === "green" && <GreenRightIcon />}
					{IconColor === "purple" && <PurpleRightIcon />}
				</Flexbox>
			</QuestionInfoShell>
		</>
	);
};
export default QuestionInfo;
