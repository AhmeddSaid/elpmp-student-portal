"use client";

import styled from "styled-components";

type Props = {
	size?: "small" | "xSmall" | "xxSmall";
	disabled?: boolean;
	color?: "gray" | "blue" | "green" | "red";
};

export const BadgeContainer = styled.div<Props>`
	display: inline-flex;
	height: 1.75rem;

	padding: ${({ size }) => {
		switch (size) {
			case "small":
				return " 0.25rem 0.5rem  ";
			case "xSmall":
				return " 0.125rem 0.25rem  ";
			case "xxSmall":
				return " 0rem 0.125rem  ";

			default:
				return "50px";
		}
	}};
	user-select: none;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	border-radius: 1rem;
	background: ${({ color, disabled }) => {
		if (disabled) {
			switch (color) {
				case "blue":
					return "var(--Surface-surface-info-disabled, #C8DBFF)";
				case "gray":
					return "var(--Surface-surface-secondary-disabled, #E2E5EB)";
				case "green":
					return "var(--Surface-surface-success-disabled, #D8EDDC)";
				case "red":
					return "#FF0000FF";
				default:
					return "var(--Surface-surface-info-disabled, #C8DBFF)";
			}
		} else {
			switch (color) {
				case "blue":
					return "var(--main-color, #4f29f3)";
				case "gray":
					return "var(--Surface-surface-secondary-inverse, #626D7C)";
				case "green":
					return "var(--Surface-surface-success, #00823E)";
				case "red":
					return "rgba(236,0,0,0.84)";
				default:
					return "var(--Surface-surface-info, #3259E8)";
			}
		}
	}};
`;

export const BadgeTitle = styled.span<Props>`
	color: var(--Text-text-white-on-color, #fff);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: ${({ size }) => {
		switch (size) {
			case "small":
				return " 0.875rem ";
			case "xSmall":
				return " 0.75rem ";
			case "xxSmall":
				return " 0.75rem ";
		}
	}};
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem;
`;
