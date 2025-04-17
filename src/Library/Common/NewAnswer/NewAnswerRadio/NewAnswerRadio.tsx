import React from "react";
import EmptyRadioButton from "@/Library/Common/Icongraphy/EmptyRadioButton/EmptyRadioButton";
import RadioIcon from "@/Library/Common/Icongraphy/RadioIcon/RadioIcon";
import { NewAnswerRadioShell } from "@/Library/Common/NewAnswer/NesAnswerCheckBox/NesAnswerCheckBox.styles";

const NewAnswerRadio = ({ state }: { state: string | undefined }) => {
	return (
		<>
			<NewAnswerRadioShell active={state === "active"}>
				<label htmlFor="">
					<div className={"RadioShell"}>{state === "active" ? <RadioIcon /> : ""}</div>
				</label>

				<input type={"radio"} />
			</NewAnswerRadioShell>
		</>
	);
};

export default NewAnswerRadio;
