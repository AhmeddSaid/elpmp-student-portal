"use client";

import styled from "styled-components";

export const DropdownCustomStyles = styled.button<{ open: boolean }>`
	padding: var(--Spacing-spacing-04, 12px);
	border-radius: var(--corner-03, 8px);
	border: 1px solid var(--Border-border-primary, #c3c9d1);
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;

	&:focus {
		border-radius: var(--corner-03, 8px);
		border: 2px solid var(--Background-bg-primary, #fff);
		background: var(--Surface-surface-secondary-hover, #c3c9d1);
		box-shadow: 0 0 0 2px #3259e8;
	}
	svg {
		transform: rotate(${({ open }) => (open ? "0.5turn" : "")});
		transition: 0.3s ease-in-out;
	}
`;

export const DropdownBody = styled.p`
	color: var(--Text-text-primary, #000);
	padding: 0 var(--Spacing-spacing-03, 8px);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;
export const DropdownMenu = styled.ul<{ open: boolean }>`
	display: ${({ open }) => (open ? "flex" : "none")};
	max-width: 200px;
	padding: var(--corner-02, 4px) var(--Spacing-spacing-02, 4px);
	flex-direction: column;
	align-items: flex-start;
	border-radius: var(--corner-03, 8px);
	border: 1px solid var(--Border-border-primary-muted, #e2e5eb);
	background: var(--Surface-surface-elevation, #fff);
	box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
	margin-top: 8px;
`;
