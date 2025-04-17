"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const SegmentControlSection = styled(Flexbox)`
	padding: 0.2rem;
	border-radius: var(--corner-0.375rem, 0.375rem);
	background: var(--Surface-surface-secondary, #e2e5eb);
`;

export const SegmentControlShell = styled(Flexbox)<{
	size: string;
	disable?: boolean;
	active?: boolean;
}>`
	border-radius: var(--corner-02, 0.25rem);

	text-align: center;
	position: relative;
	overflow: hidden;
	user-select: none;
	background: ${({ active }) => (active ? "white" : "transparent")};

	&:focus {
		border-radius: var(--corner-02, 0.25rem);
		border: 2px solid var(--Border-border-accent, #3259e8);
	}

	cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};

	& > * {
		cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")} !important;
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
		& label {
			color: ${({ disable }) => (disable ? "" : "var(--Text-text-accent-hover, #213fc0)")};
		}

		& svg {
			fill: var(--Text-text-accent-hover, #213fc0);
		}
	}
`;

export const SegmentControlLabel = styled(Flexbox)<{
	size?: string;
	active?: boolean;
	disable?: boolean;
}>`
	padding-inline: 8px;
	align-items: center;
	//color: var(--Text-text-primary, #000);

	color: ${({ active, disable }) => {
		if (disable) {
			return "var(--Text-text-primary-muted, #A2ABB8)";
		} else {
			if (active) {
				return " var(--Text-text-secondary, #626D7C)";
			} else {
				return " var(--Text-text-primary, #000)";
			}
		}
	}};
	font-variant-numeric: lining-nums proportional-nums;
	cursor: pointer;

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

export const NumberDiv = styled.div<{ disable: boolean }>`
	display: flex;
	height: 1.25rem;
	padding: var(--Spacing-spacing-01, 0.125rem) var(--Spacing-spacing-02, 0.25rem);
	justify-content: center;
	align-items: center;
	border-radius: var(--corner-05, 1rem);
	background: ${({ disable }) =>
		disable
			? "var(--Border-border-primary-muted, #E2E5EB)"
			: "var(--Border-border-accent, #3259e8)"};
`;

export const NumberStyles = styled.p`
	color: var(--Text-text-white-on-color, #fff);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.75rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1rem; /* 133.333% */
`;

export const UnderLine = styled.div<{ disable?: boolean; active?: boolean }>`
	//background: var(--Border-border-accent, #3259e8);

	background: ${({ disable }) =>
		disable
			? "var(--Border-border-primary-muted, #E2E5EB)"
			: "var(--Border-border-accent, #3259e8)"};

	position: absolute;
	bottom: 0rem;
	width: 8.25rem;
	height: 0.125rem;
`;
