"use client";
import styled from "styled-components";
import { ButtonBase } from "@/Library/Common/Button/Button.styles";

export const SocialMediaButtonStyles = styled.button<{
	disable: boolean;
	size?: "md" | "sm";
	variant?: "primary" | "secondary";
	type: "facebook" | "google";
}>`
	${ButtonBase}
	border-radius: var(--corner-03, 8px);
	border: ${({ variant }) => {
		switch (variant) {
			case "primary":
				return "none";
			case "secondary":
				return "1px solid var(--Border-border-primary, #C3C9D1)";
			default:
				return "none";
		}
	}};

	cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
	background: ${({ variant }) => {
		switch (variant) {
			case "primary":
				return "var(--Social-Media-Buttons-button-facebook, #3875ea)";
			case "secondary":
				return "transparent";
			default:
				return "var(--Social-Media-Buttons-button-twitter, #3875ea)";
		}
	}};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: ${({ size, type, variant }) => {
		if (type === "google" && variant === "primary") {
			return "2px 20px 2px 2px";
		} else {
			switch (size) {
				case "md":
					return "12px 20px 12px 16px";
				case "sm":
					return "8px 16px 8px 12px";
				default:
					return "12px 20px 12px 16px";
			}
		}
	}};
	gap: 12px;

	&:hover {
		background-color: ${({ disabled, variant }) =>
			disabled
				? ""
				: variant === "primary"
					? "var(--Social-Media-Buttons-button-facebook-hover, #346cd9)"
					: "var(--Surface-surface-secondary-hover, #C3C9D1)"};
	}

	&:focus {
		border: ${({ disabled }) =>
			disabled ? "none" : "2px solid var(--Background-bg-primary, #fff)"};
		box-shadow: 0 0 0 2px #3259e8;
	}

	&:active {
		background-color: ${({ disabled, variant }) =>
			disabled
				? ""
				: variant === "primary"
					? "var(--Social-Media-Buttons-button-facebook-active, #2b5bb7)"
					: "var(--Surface-surface-secondary-pressed, #A2ABB8)"};
	}

	&:disabled {
		opacity: 0.5;
	}
`;

export const SocialMediaButtonBodyStyles = styled.p<{
	size?: "md" | "sm";
	variant?: "primary" | "secondary";
}>`
	color: ${({ variant }) => {
		switch (variant) {
			case "primary":
				return "var(--Text-text-white-on-color, #fff)";
			case "secondary":
				return "var(--Text-text-primary, #000)";
			default:
				return "var(--Text-text-white-on-color, #fff)";
		}
	}}; // var(--Text-text-white-on-color, #fff);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: ${({ size }) => {
		switch (size) {
			case "md":
				return "16px";
			case "sm":
				return "14px";
			default:
				return "16px";
		}
	}};
	font-style: normal;
	font-weight: 600;
	line-height: ${({ size }) => {
		switch (size) {
			case "md":
				return "24px";
			case "sm":
				return "20px";
			default:
				return "24px";
		}
	}};
`;
