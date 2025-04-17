"use client";
import styled from "styled-components";

export const DropdownMenuItemStyles = styled.li`
	width: 100%;
`;

export const DropdownMenuItemInner = styled.button`
	width: 100%;
	display: inline-flex;
	padding: var(--Spacing-spacing-03, 8px) 10px;
	align-items: center;
	gap: var(--Spacing-spacing-03, 8px);
	align-self: stretch;
	border-radius: var(--corner-02, 4px);
	&:hover {
		background: var(--Surface-surface-secondary, #e2e5eb);
	}
	&:focus {
		border: 2px solid var(--Border-border-accent, #3259e8);
		background: var(--Surface-surface-secondary, #e2e5eb);
	}
`;
export const DropdownMenuItemText = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;
