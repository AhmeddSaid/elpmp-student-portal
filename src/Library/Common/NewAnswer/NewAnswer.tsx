import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import RightIcon from "@/Library/Common/Icongraphy/RightIcon/RightIcon";
import WrongIcon from "@/Library/Common/Icongraphy/WrongIcon/WrongIcon";
import NesAnswerCheckBox from "@/Library/Common/NewAnswer/NesAnswerCheckBox/NesAnswerCheckBox";
import {
	AnswerBody,
	AnswerNumber,
	NewAnswerShell,
} from "@/Library/Common/NewAnswer/NewAnswer.styles";
import NewAnswerRadio from "@/Library/Common/NewAnswer/NewAnswerRadio/NewAnswerRadio";

const NewAnswer = ({
	type,
	state,
	body,
	questionNumber,
	isAnswered,
}: {
	type: string;
	state?: string | undefined;
	body: string;
	questionNumber: number;
	isAnswered: boolean;
}) => {
	return (
		<>
			<NewAnswerShell isAnswered={isAnswered} type={type} state={state} $justify={"space-between"}>
				<Flexbox $gap={12}>
					<AnswerNumber className={"questionIndex"} state={state}>
						{questionNumber}
					</AnswerNumber>

					<div className={"SingleAnswer"}>
						<NewAnswerRadio state={state} />
					</div>

					<div className={"multipleAnswer"}>
						<NesAnswerCheckBox state={state} />
					</div>
					<AnswerBody>{body}</AnswerBody>
				</Flexbox>
				<div className={"Icon"}>
					{state === "correct" && <RightIcon />}
					{state === "wrong" && <WrongIcon />}
				</div>
			</NewAnswerShell>
		</>
	);
};

export default NewAnswer;
