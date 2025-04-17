"use client";

import { ReactNode } from "react";
import styled from "styled-components";

export const LabelInput = styled.label<{ disable?: boolean }>`
	font-size: 0.875rem;
	display: inline-block;
	color: ${({ theme }) => theme.black500};
	font-weight: 600;
	line-height: 1.25rem;
	-webkit-margin-after: 0.5rem;
	margin-block-end: 0.25rem;
	vertical-align: baseline;

	color: ${({ disable }) => {
		switch (disable) {
			case true:
				return "var(--Text-text-primary-muted, #A2ABB8)";

			default:
				return "var(--Text-text-primary, #000)";
		}
	}};
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;

	& > svg {
		position: absolute;
		right: 1rem;
		top: 25%;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;

export const TextInputStyles = styled.input<{
	size?: "small" | "medium" | "large";
	$statusss?: "error" | "Success";
	disable?: false | true;
	optionPosition?: "left" | "right";
	icon?: ReactNode;
}>`
	outline: none;
	// padding-inline: ${({ optionPosition }) => (optionPosition === "left" ? "6.75rem" : "2.75rem")};

	padding-inline-start: ${({ icon }) => (icon ? "2.75rem" : " 1rem ")};
	width: 100%;

	padding-inline-end: ${({ icon }) => (icon ? "2.75rem" : " 1rem ")};

	height: ${({ size }) => {
		switch (size) {
			case "small":
				return "32px";
			case "medium":
				return "40px";
			case "large":
				return "48px";

			default:
				return "48px";
		}
	}};
	border-radius: var(--corner-03, 0.5rem);
	//border: 1px solid var(--Border-border-primary, #c3c9d1);

	border: ${({ $statusss }) => {
		switch ($statusss) {
			case "error":
				return "1px solid var(--Border-border-danger, #d41a1a)";
			case "Success":
				return "1px solid var(--Border-border-primary-hover, #a2abb8)";
			default:
				return "1px solid var(--Border-border-primary-hover, #a2abb8)";
		}
	}};

	//background: var(--Surface-surface-elevation, #fff);
	background: ${({ disable }) => {
		switch (disable) {
			case true:
				return "var(--Surface-surface-secondary-muted, #F7F8FB)";

			default:
				return "var(--Surface-surface-elevation, #fff)";
		}
	}};

	&::placeholder {
		color: var(--Text-text-primary-muted, #a2abb8);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1rem;
	}

	&:hover {
		//border: 1px solid var(--Border-border-primary-hover, #a2abb8);

		border: ${({ $statusss }) => {
			switch ($statusss) {
				case "error":
					return " 1px solid var(--Border-border-danger, #d41a1a)";

				case "Success":
					return " 1px solid var(--Border-border-primary-hover, #a2abb8)";

				default:
					return " 1px solid var(--Border-border-primary-hover, #a2abb8)";
			}
		}};
	}

	&:focus {
		//border: 2px solid var(--Border-border-accent, #3259e8);

		border: ${({ $statusss }) => {
			switch ($statusss) {
				case "error":
					return " 1px solid var(--Border-border-danger, #d41a1a)";

				case "Success":
					return "1px solid var(--Border-border-accent, #3259e8)";

				default:
					return "1px solid var(--Border-border-accent, #3259e8)";
			}
		}};
	}
`;

export const TraillingIcon = styled.div<{ size?: "small" | "medium" | "large" }>`
	padding-inline-start: 0.75rem;
	position: absolute;
	right: 4.3rem;
	top: ${({ size }) => {
		switch (size) {
			case "small":
				return "15%";
			case "medium":
				return "20%";
			case "large":
				return "25%";
		}
	}};
	user-select: none;
`;

export const LeadingIconContainer = styled.div<{
	size?: "small" | "medium" | "large";
	optionPosition?: "left" | "right";
}>`
	padding-inline-end: 0.25rem;
	position: absolute;
	left: ${({ optionPosition }) => (optionPosition === "left" ? "" : "0.75rem")};
	right: ${({ optionPosition }) => (optionPosition === "left" ? "15px" : "")};
	top: ${({ size }) => {
		switch (size) {
			case "small":
				return "15%";
			case "medium":
				return "20%";
			case "large":
				return "25%";
		}
	}};
	user-select: none;
`;

export const TextInputCaption = styled.p`
	color: var(--Text-text-secondary, #626d7c);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
	margin-top: 8px;
`;

export const TextInputErrorMessage = styled.p`
	color: var(--Text-text-danger, #d41a1a);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
	margin-top: 0.5rem;
`;

export const TextInputSelect = styled.div<{ optionPosition: "left" | "right" }>`
	position: absolute;

	left: ${({ optionPosition }) => (optionPosition === "left" ? "0.75rem" : "")};

	//right: 15px;
	right: ${({ optionPosition }) => (optionPosition === "left" ? "" : "15px")};
	top: 25%;
`;
