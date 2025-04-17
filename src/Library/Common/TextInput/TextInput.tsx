import React, { ReactNode } from "react";
import {
	InputContainer,
	LabelInput,
	LeadingIconContainer,
	TextInputCaption,
	TextInputErrorMessage,
	TextInputStyles,
} from "@/Library/Common/TextInput/TextInput.styles";

// @ts-ignore
interface InputType extends React.ComponentPropsWithoutRef<"input"> {
	caption?: string;
	label?: string;
	placeholder: string;
	size?: "small" | "medium" | "large";
	statusss?: "error" | "Success";
	errorMessage?: string;
	disable?: boolean;
	type: "email" | "password" | "text" | "number" | "tel" | "date" | "datetime-local";
	icon?: ReactNode;
	id: string;
}

const TextInput = ({
	caption,
	label,
	placeholder,
	size = "large",
	statusss,
	errorMessage,
	disable,
	type,
	icon,
	id,
	...rest
}: InputType) => {
	return (
		<>
			{label && (
				<LabelInput htmlFor={id} disable={disable}>
					{label}
				</LabelInput>
			)}

			<InputContainer>
				{icon && <LeadingIconContainer size={size}>{icon}</LeadingIconContainer>}
				<TextInputStyles
					disable={disable}
					$statusss={statusss}
					size={size}
					placeholder={placeholder}
					disabled={disable}
					icon={icon}
					id={id}
					type={type}
					{...rest}
				/>
				{errorMessage && (
					<svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23">
						<g id="Group_106649" data-name="Group 106649" transform="translate(-1245 -468)">
							<circle
								id="Ellipse_2795"
								data-name="Ellipse 2795"
								cx="10.5"
								cy="10.5"
								r="10.5"
								transform="translate(1245 469)"
								fill="#d41a1a"
							/>
							<text
								id="_"
								data-name="!"
								transform="translate(1253 485)"
								fill="#fff"
								fontSize="16"
								fontFamily="Poppins-Regular, Poppins"
							>
								<tspan x="0" y="0">
									!
								</tspan>
							</text>
						</g>
					</svg>
				)}
				{/*<TraillingIcon className={"TraillingIcon"} size={size}>*/}
				{/*	<TestIcon />*/}
				{/*</TraillingIcon>*/}
			</InputContainer>
			{caption && <TextInputCaption>{caption}</TextInputCaption>}
			{errorMessage && <TextInputErrorMessage>{errorMessage}</TextInputErrorMessage>}
		</>
	);
};

export default TextInput;
