"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const ProgressBarShell = styled(Flexbox)<{
	indicator?: boolean;
}>`
	width: 100%;
	flex-grow: 1;
	p {
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0;
		vertical-align: middle;
		color: ${({ indicator }) =>
			indicator ? "var(--Text-text-accent, #4A2BE9);" : " var(--Text-text-secondary, #626D7C)"};
		text-align: start;
	}
`;
export const ColoredDiv = styled.div<{ bgColor: string }>`
	width: 100%;
	height: 0.9375rem;
	border-radius: var(--Radius-radius-02, 0.25rem);
	background-color: ${({ bgColor }) => bgColor};
	position: relative;
`;

export const ProgressIndicator = styled(Flexbox)`
	position: absolute;
	left: 4.12rem;
	bottom: -0.69rem;
	z-index: -1;

	p {
		color: var(--Text-text-primary, #000);
	}

	div {
		width: 1px;
		height: 3.25rem;
		background-color: var(--Border-border-primary-muted-inverse, #343b45);
	}
`;
