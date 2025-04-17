"use client";

import styled from "styled-components";

export const ExamQuestionShell = styled.div`
	p {
		user-select: none;
	}

	.ExamQuestionBody {
		color: var(--Text-text-primary, #000);
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 28px;
		user-select: none;
	}

	.Choose {
		color: var(--Text-text-primary, #000);
		text-align: center;
		font-variant-numeric: lining-nums proportional-nums;

		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	.tag {
		padding: 4px 8px;
		background: var(--Surface-surface-secondary-inverse, #626d7c);
		color: white;
		border-radius: 16px;
		font-size: 12px;
		font-weight: 500;
	}

	.WrongTag {
		padding: 4px 8px;
		background: var(--Surface-surface-danger, #c32518);
		color: white;
		border-radius: 16px;
		font-size: 12px;
		font-weight: 500;
	}

	.SuccessTag {
		padding: 4px 8px;
		background: var(--Surface-surface-success-disabled, #d8eddc);
		color: white;
		border-radius: 16px;
		font-size: 12px;
		font-weight: 500;
	}
`;
