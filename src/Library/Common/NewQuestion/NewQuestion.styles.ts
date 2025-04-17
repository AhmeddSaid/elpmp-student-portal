"use client";

import styled from "styled-components";

export const NewQuestionShell = styled.div<{
	DangerTag: boolean | undefined;
	OpenAllQuestion: boolean;
}>`
	border-bottom: 1px solid var(--Border-border-primary-muted, #e2e5eb);
	background: ${({ OpenAllQuestion }) =>
		OpenAllQuestion
			? " var(--Surface-surface-secondary-muted, #F7F8FB)"
			: "var(--Surface-surface-elevation, #FFF)"};
	user-select: none;
	.container {
		padding: 18px 16px 18px 24px;
	}

	.SeeAnswerDiv {
		min-width: 115px;
	}

	.tag {
		padding: 4px 8px;
		//background: #626d7c;
		background: ${({ DangerTag }) =>
			DangerTag ? "var(--Surface-surface-danger, #C32518)" : "#626d7c"};
		color: white;
		border-radius: 16px;
		font-size: 12px;
		font-weight: 500;
	}

	.view {
		font-size: 12px;
		font-weight: 500;
		line-height: 16px;
		color: #626d7c;
	}
`;

export const AllQuestionShell = styled.div`
	background: #f7f6fe;
	//display: flex;
	//justify-content: space-between;
`;

export const QuestionNumber = styled.p<{ bgDark?: boolean }>`
	//border: 2px solid #c3c9d1;
	border-radius: 8px;
	width: 28px;
	height: 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;

	//color: #626d7c;
	color: ${({ bgDark }) => (bgDark ? "white" : " #626d7c")};

	//background: #e2e5eb;
	background: ${({ bgDark }) => (bgDark ? "#626D7C" : " #e2e5eb")};
`;

export const QuestionInfoShell = styled.div`
	padding: 16px 32px 16px 128px;
	border-top: 1px solid #e2e5eb;
`;

export const ArrowShell = styled.div<{ OpenAllQuestion: boolean }>`
	transform: ${({ OpenAllQuestion }) => (OpenAllQuestion ? "rotate(180deg)" : "")};

	transition: all 0.3s ease-in-out;
`;
