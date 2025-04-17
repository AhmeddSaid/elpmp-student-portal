"use client";

import Link from "next/link";
import styled from "styled-components";

export const MyLearningHeader = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 32px;
`;
export const OpenExamButton = styled(Link)`
	display: none;
	width: 120px;
	height: 32px;
	text-decoration: none !important;
	padding: var(--Spacing-spacing-03, 8px);
	justify-content: center;
	align-items: center;
	border-radius: var(--corner-03, 8px);
	border: 1px solid var(--Border-border-primary, #c3c9d1);
	cursor: pointer;
	gap: 8px;

	p {
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 16px; /* 133.333% */
		text-decoration: none;
	}
`;
