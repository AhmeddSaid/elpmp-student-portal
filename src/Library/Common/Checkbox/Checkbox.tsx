import React from "react";
import {
	CheckboxHint,
	CheckboxInput,
	CheckboxLabel,
	CheckboxLabelStyles,
} from "@/Library/Common/Checkbox/Checkbox.styles";

interface CheckboxType extends React.ComponentPropsWithoutRef<"input"> {
	id?: string;
	label: string;
	hint?: string;
	isDisabled?: boolean;
}

const Checkbox = ({ id, label = "", hint, isDisabled = false, ...rest }: CheckboxType) => {
	return (
		<CheckboxLabel $Disabled={isDisabled} htmlFor={id}>
			<CheckboxInput type="checkbox" id={id} {...rest} />
			<svg
				id={"unchecked"}
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
			>
				<path
					d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z"
					fill="white"
					stroke="#C3C9D1"
				/>
			</svg>

			<svg
				id={"checked"}
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
					fill="#3259E8"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13.7072 4.70718L6.00008 12.4143L2.29297 8.70718L3.70718 7.29297L6.00008 9.58586L12.293 3.29297L13.7072 4.70718Z"
					fill="white"
				/>
			</svg>
			<div>
				<CheckboxLabelStyles $Disabled={isDisabled}>{label}</CheckboxLabelStyles>
				{hint && <CheckboxHint $Disabled={isDisabled}>{hint}</CheckboxHint>}
			</div>
		</CheckboxLabel>
	);
};

export default Checkbox;
