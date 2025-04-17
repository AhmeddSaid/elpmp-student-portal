import React from "react";
import { useSelector } from "react-redux";
import { AnswerBody, AnswerContainer, AnswerIndex } from "@/Library/Common/Answer/Answer.styles";
import { IndexStyles } from "@/Library/Common/Button/Button.styles";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import Tags from "@/Library/Common/Tags/Tags";
import { MainRootState } from "@/lib/Store";

const Answer = ({
	body,
	statusss = "unselected",
	isCorrect = false,
	index,
	type,
	isStrikethrough = false,
}: {
	index: number;
	body: string;
	statusss?: "unselected" | "selected" | "correct" | "wrong";
	type: "MULTIBLECHOISE" | "SINGLE" | "MATCH";
	isCorrect?: boolean;
	isStrikethrough?: boolean;
}) => {
	const { dirIsLTR } = useSelector((state: MainRootState) => state.ChangeDirectionAnswer);
	const { open } = useSelector((state: MainRootState) => state.openAndHideExp);

	return (
		<AnswerContainer statusss={statusss}>
			<Flexbox $justify={"space-between"} $gap={24}>
				<AnswerBody
					dirIsLTR={dirIsLTR}
					style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}
				>
					<IndexStyles>{index}</IndexStyles>
					{type === "MULTIBLECHOISE" && (
						<Checkbox
							id={index.toString()}
							checked={statusss === "selected" || statusss === "correct"}
							value={index}
							name={index.toString()}
							label={""}
						/>
					)}
					<p>{body}</p>
				</AnswerBody>
				<AnswerIndex dirIsLTR={dirIsLTR} $gap={16}>
					{open && isCorrect && (
						<Tags
							fcolor={"success"}
							bgcolor={"success"}
							tagtittle={"Correct Answer"}
							size={"xsmall"}
						/>
					)}
				</AnswerIndex>
			</Flexbox>
		</AnswerContainer>
	);
};

export default Answer;
