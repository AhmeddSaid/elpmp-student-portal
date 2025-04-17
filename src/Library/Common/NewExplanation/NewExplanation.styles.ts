"use client";

import styled from "styled-components";

export const NewExplanationShell = styled.div<{ openExplenation: boolean }>`
	margin-top: 40px;

	display: ${({ openExplenation }) => (openExplenation ? "none" : "")};

	p {
		color: var(--Text-text-primary, #000);
		user-select: none;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px;
	}
`;

export const ExplanationBody = styled.div`
	border: 1px solid #b4a7f6;
	margin-top: 12px;
	background: #f7f6fe;
	border-radius: 12px;
	padding: 24px 32px;

	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	user-select: none;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
`;
