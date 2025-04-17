import React from "react";
import {
	RadioHint,
	RadioInput,
	RadioLabel,
	RadioLabelStyles,
} from "@/Library/Common/Radio/Radio.styles";

const Radio = ({
	id,
	value,
	name,
	label = "",
	hint,
	Disabled = false,
	...rest
}: {
	id: string;
	value: string;
	name: string;
	label: string;
	hint?: string;
	Disabled?: boolean;
}) => {
	return (
		<>
			<RadioLabel $Disabled={Disabled} htmlFor={id}>
				<RadioInput type="radio" id={id} name={name} value={value} {...rest} />
				<svg
					id={"unchecked"}
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<circle cx="8" cy="8" r="7.5" fill="white" stroke="#C3C9D1" />
				</svg>
				<svg
					id={"checked"}
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<circle cx="8" cy="8" r="8" fill="#3259E8" />
					<circle cx="8" cy="8" r="3" fill="white" />
				</svg>
				<div>
					<RadioLabelStyles Disabled={Disabled}>{label}</RadioLabelStyles>
					{hint && <RadioHint disabled={Disabled}>{hint}</RadioHint>}
				</div>
			</RadioLabel>
		</>
	);
};

export default Radio;
