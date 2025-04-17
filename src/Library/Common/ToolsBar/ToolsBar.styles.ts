"use client";

import styled from "styled-components";
import { Section } from "@/Library/Common/Grids/Grids";

export const ToolsBarContainer = styled.section`
	border-bottom: 1px solid #c3c9d1;
	background: #f7f8fb;

	.FlagToReview {
		cursor: pointer;
		user-select: none;
	}

	p {
		user-select: none;
	}
`;

export const ToolsBarShell = styled(Section)`
	padding-block: 18px;

	.AllExamTitle {
		color: var(--Text-text-primary, #000);

		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}

	.numberOfQuestion {
		color: var(--Text-text-secondary, #626d7c);
		text-align: center;

		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}

	.unSend {
		color: var(--Text-text-primary, #000);
		text-align: center;
		font-variant-numeric: lining-nums proportional-nums;

		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	.EndExamTitle {
		color: var(--Text-text-accent, #4a2be9);
		font-variant-numeric: lining-nums proportional-nums;

		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 150% */
	}
`;
