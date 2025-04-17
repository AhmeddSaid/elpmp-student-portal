"use client";
import React, { ReactNode } from "react";
import { ButtonCaption, ButtonStyle } from "@/Library/Common/Button/Button.styles";
import QuestionSpinner from "@/Library/Common/skeleton/QuestionSpinner";

const Button = ({
	onclick,
	disabled = false,
	bgcolor = "primary",
	icon,
	SecondIcon,
	size = "medium",
	body,
	buttonType,
	loading = false,
}: {
	body: string;
	icon?: ReactNode;
	SecondIcon?: ReactNode;
	onclick?: () => void;
	disabled?: boolean;
	size?: "medium" | "xsmall" | "small" | "fullWidth";
	bgcolor?: "primary" | "secondary" | "gost" | "danger";
	buttonType?: "submit" | "button" | "reset";
	loading?: boolean;
}) => {
	const clickHandler = () => {
		if (disabled || loading) return;
		if (!onclick) return;
		onclick();
	};

	return (
		<ButtonStyle
			disabled={disabled}
			$bgcolor={bgcolor}
			size={size}
			onClick={clickHandler}
			type={loading ? "button" : buttonType}
		>
			{loading && <QuestionSpinner white />}
			{!loading && (
				<>
					{icon}
					<ButtonCaption disable={disabled} $bgcolor={bgcolor} size={size}>
						{body}
					</ButtonCaption>

					{SecondIcon}
				</>
			)}
		</ButtonStyle>
	);
};

export default Button;
