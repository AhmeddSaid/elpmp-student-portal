import React from "react";
import CheckedIcon from "@/Library/Common/Icongraphy/CheckedIcon/CheckedIcon";
import {
	AnswerChecked,
	NesAnswerCheckBoxShell,
} from "@/Library/Common/NewAnswer/NesAnswerCheckBox/NesAnswerCheckBox.styles";

const NesAnswerCheckBox = ({ state }: { state: string | undefined }) => {
	return (
		<>
			<NesAnswerCheckBoxShell active={state === "active"}>
				<label htmlFor="">
					<AnswerChecked active={state === "active"}>
						<div>{state === "active" ? <CheckedIcon /> : ""}</div>
					</AnswerChecked>
				</label>

				<input type={"checkbox"} id={""} />
			</NesAnswerCheckBoxShell>
		</>
	);
};

export default NesAnswerCheckBox;
