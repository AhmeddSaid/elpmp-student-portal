"use client";
import Link from "next/link";
import styled from "styled-components";

export const PageNumberCustomStyle = styled(Link)<{ Current?: boolean }>`
	padding: var(--Spacing-spacing-04, 12px);
	border-radius: var(--corner-03, 8px);
	//background: var(--Surface-surface-secondary-pressed, #a2abb8);
	background: ${({ Current }) =>
		Current ? "var(--Surface-surface-secondary-pressed, #a2abb8)" : ""};

	p {
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
		padding: 0 var(--Spacing-spacing-03, 8px);
	}

	&:hover {
		background: var(--Surface-surface-secondary-hover, #c3c9d1);
	}
`;
