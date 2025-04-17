import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { AnswerBody, AnswerContainer, AnswerIndex } from "@/Library/Common/Answer/Answer2.styles";
import { IndexStyles } from "@/Library/Common/Button/Button.styles";
import Checkbox from "@/Library/Common/Checkbox/Checkbox";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import UserIconMd from "@/Library/Common/Icongraphy/UserIcon/UserIconMd";
import Tags from "@/Library/Common/Tags/Tags";
import { MainRootState } from "@/lib/Store";

const Answer = ({
	body,
	statusss = "unselected",
	isCorrect = false,

	type,
}: {
	body: ReactNode; // body is of type ReactNode
	statusss?: "unselected" | "selected" | "correct" | "wrong";
	showAnswerTag?: boolean;
	type: "multi" | "single" | "match";
	isCorrect?: boolean;
}) => {
	const { dirIsLTR } = useSelector((state: MainRootState) => state.ChangeDirectionAnswer);
	const { open } = useSelector((state: MainRootState) => state.openAndHideExp);

	return (
		<AnswerContainer statusss={statusss}>
			<Flexbox $justify={"space-between"} $align={"center"} $gap={24}>
				<AnswerBody dirIsLTR={dirIsLTR}>
					{type === "multi" && <Checkbox id="" value={"12"} name={"12"} label={""} />}
					{body} {/* Render JSX content */}
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
					<IndexStyles>
						<UserIconMd />
					</IndexStyles>
				</AnswerIndex>
			</Flexbox>
		</AnswerContainer>
	);
};

export default Answer;
