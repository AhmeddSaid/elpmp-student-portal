"use client";

import { ReactNode } from "react";
import styled from "styled-components";

export const SelectContainer = styled.div<{ rotateArrow?: boolean }>`
	position: relative;
	width: 100%;
	background: var(--Surface-surface-elevation, transparent);

	& > #chevron {
		rotate: ${({ rotateArrow }) => (rotateArrow ? "180deg" : "0deg")};
	}
`;

export const SelectOption = styled.select<{ statuss?: string; icon?: ReactNode }>`
	display: flex;
	max-width: 100%;
	width: 100%;
	appearance: none;
	height: var(--Spacing-spacing-09, 3rem);
	padding-block: var(--Spacing-spacing-04, 0.75rem);
	margin-top: 4px;
	padding-inline-end: 2.5rem;
	padding-inline-start: ${({ icon }) => (icon ? "2.5rem" : " 1rem ")};

	align-items: flex-start;
	gap: var(--Spacing-spacing-04, 0.75rem);
	border-radius: var(--corner-03, 0.5rem);

	border: ${({ statuss }) => {
		switch (statuss) {
			case "success":
				return " var(--Spacing-spacing-01, 2px) solid var(--Border-border-success, #00823E);";
			case "error":
				return " var(--Spacing-spacing-01, 2px) solid var(--Border-border-danger, #C32518);";

			default:
				return "1px solid var(--Border-border-primary, #c3c9d1)";
		}
	}};

	background: transparent;

	&:hover {
		border: 1px solid var(--Border-border-primary-hover, #a2abb8);
	}

	&:focus {
		border: var(--Spacing-spacing-01, 2px) solid var(--Border-border-accent, #3259e8);
	}
`;

export const SelectIcon = styled.div`
	position: absolute;

	left: 0.75rem;
	top: 25%;
`;

export const SelectSecondIcon = styled.div`
	position: absolute;
	right: 2.5rem;
	top: 25%;
`;

export const SelectLabel = styled.label`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem;
	//padding-inline: 5px;
	user-select: none;
`;

export const SelectCaption = styled.p<{ statuss?: string }>`
	font-variant-numeric: lining-nums proportional-nums;
	user-select: none;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
	padding-inline: 5px;

	color: ${({ statuss }) => {
		switch (statuss) {
			case "success":
				return "  var(--Text-text-success, #00823E)";
			case "error":
				return "var(--Text-text-danger, #C32518)";
			default:
				return "var(--Text-text-secondary, #626d7c)";
		}
	}};
`;

export const SelectChevronIcon = styled.div<{ locale?: "en" | "ar" }>`
	position: absolute;
	top: 25%;
	right: ${({ locale }) => (locale === "en" ? "0.75rem" : "")};
	left: ${({ locale }) => (locale === "en" ? "" : "0.75rem")};
	z-index: -1;
	transition: all 0.3s ease-in-out;
`;
