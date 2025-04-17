"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const TapsShell = styled(Flexbox)<{ size: string; active?: boolean; disable?: boolean }>`
	text-align: center;
	position: relative;
	overflow: hidden;
	user-select: none;

	&:focus {
		border-radius: var(--corner-02, 0.25rem);
		border: 2px solid var(--Border-border-accent, #3259e8);
	}

	//cursor: ${({ disable, active }) => (disable || active ? "not-allowed" : "pointer")};

	& > * {
		//cursor: ${({ disable, active }) =>
			disable || active ? "not-allowed" : "pointer"} !important;
	}

	width: fit-content;
	justify-content: center;
	padding: ${({ size }) => {
		switch (size) {
			case "medium":
				return "var(--Spacing-spacing-04, 0.75rem)";
			case "small":
				return " 0.625rem;";
			case "xsmall":
				return "var(--Spacing-spacing-03, 0.5rem)";
		}
	}};

	&:hover {
		cursor: ${({ disable, active }) => (disable || active ? "not-allowed" : "pointer")} !important;

		& label {
			cursor: ${({ disable, active }) =>
				disable || active ? "not-allowed" : "pointer"} !important;

			color: ${({ disable, active }) =>
				disable
					? ""
					: active
						? "var(--Text-text-primary, #000)"
						: "var(--Text-text-accent-hover, #213fc0)"};
		}

		& svg {
			fill: var(--Text-text-accent-hover, #213fc0);
		}
	}
`;

export const TapsLabel = styled(Flexbox)<{ size?: string; active?: boolean; disable?: boolean }>`
	align-items: center;
	//color: var(--Text-text-primary, #000);
	margin: 0 var(--Spacing-spacing-03, 8px);
	color: ${({ active, disable }) => {
		if (disable) {
			return "var(--Text-text-primary-muted, #A2ABB8)";
		} else {
			if (active) {
				return " var(--Text-text-primary, #000)";
			} else {
				return " var(--Text-text-secondary, #626D7C)";
			}
		}
	}};
	font-variant-numeric: lining-nums proportional-nums;
	//cursor: pointer;

	font-style: normal;
	font-weight: 600;

	line-height: ${({ size }) => {
		switch (size) {
			case "medium":
				return "1.5rem";
			case "small":
				return "1.25rem";
			case "xsmall":
				return "1rem";
		}
	}};

	font-size: ${({ size }) => {
		switch (size) {
			case "medium":
				return "1rem";
			case "small":
				return "0.875rem";
			case "xsmall":
				return "0.75rem";
		}
	}};
`;

export const NumberDiv = styled.div<{ disable?: boolean; active?: boolean }>`
	display: flex;
	height: 1.25rem;
	width: 1.25rem;
	padding: var(--Spacing-spacing-01, 0.125rem) var(--Spacing-spacing-02, 0.25rem);
	justify-content: center;
	align-items: center;
	border-radius: var(--corner-05, 1rem);
	background: ${({ disable, active }) =>
		disable
			? "var(--Border-border-primary-muted, #E2E5EB)"
			: active
				? "var(--Surface-surface-info, #4A2BE9)"
				: "var(--Surface-surface-secondary-inverse, #626D7C)"};
`;

export const NumberStyles = styled.p`
	color: var(--Text-text-white-on-color, #fff);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.75rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1rem;
`;

export const UnderLine = styled.div<{ disable?: boolean; active?: boolean }>`
	//background: var(--Border-border-accent, #3259e8);

	background: ${({ disable }) =>
		disable
			? "var(--Border-border-primary-muted, #E2E5EB)"
			: "var(--Border-border-accent, #4A2BE9)"};

	position: absolute;
	bottom: 0;
	width: 100%;
	height: 0.125rem;
`;
