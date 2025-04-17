"use client";
import styled from "styled-components";

export const ExamModeShell = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	border-radius: 20px;
	background-color: white;
	box-shadow: inset 0 0 0 1px gray;
	margin-top: 30px;
	min-height: 25rem;
	flex-wrap: wrap;
	width: 100%;
	cursor: pointer;

	&:hover {
		background: var(--grey-900,);
		border: 1px solid var(--main-color, #4f29f3);
	}
`;

export const ExamModeTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	word-break: break-word;
	overflow: hidden;
	color: var(--black);
	margin-top: 30px;
`;

export const ExamModeDescription = styled.div`
	text-align: start;
	margin-top: 8px;
`;

export const ExamModeCompare = styled.p`
	margin-top: 0.5rem;
	font-size: 14px;
	color: var(--secondary-black) !important;
`;
