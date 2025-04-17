"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const SimulationShell = styled.section`
	overflow: hidden;
	position: relative;
	min-height: 100dvh;
	padding-bottom: 150px !important;
`;

export const ButtonSection = styled(Flexbox)`
	position: fixed;
	justify-content: space-between;
	align-items: center;
	width: 100dvw;
	box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.15);
	padding: 0.75rem 2rem;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 60000;
	background: white;

	height: 48px;
`;

export const AllQuestionList = styled.div<{ seeAllQuestions: boolean }>`
	position: absolute;
	width: ${({ seeAllQuestions }) => (seeAllQuestions ? "40%" : "0")};
	top: 0;
	bottom: 0;
	//right: 0;

	right: ${({ seeAllQuestions }) => (seeAllQuestions ? "0" : "-900px")};
	// display: ${({ seeAllQuestions }) => (seeAllQuestions ? "" : "none")};
	//display: none;
	//right: -9000px;
	margin: auto;
	transition: all 0.25s;

	z-index: 200;
`;

export const QuestionAndAnswerShell = styled.div<{ seeAllQuestions: boolean }>`
	transition: all 0.25s;
	width: 100%;
	max-width: ${({ seeAllQuestions }) => (seeAllQuestions ? "570px" : "100%")};
	user-select: none;
`;

export const QuestionInfo = styled.p<{ dirIsLTR: boolean }>`
	font-size: 16px;
	//width: 100px;
	display: flex;
	gap: 5px;
	user-select: none;

	order: ${({ dirIsLTR }) => (dirIsLTR ? "1" : "0")};
`;

export const QuestionInfoAndFlagIcon = styled(Flexbox)<{ dirIsLTR: boolean }>`
	//padding-inline-end: 50px;
	justify-content: ${({ dirIsLTR }) => (dirIsLTR ? "end" : "start")};
`;

export const TimerStyles = styled.div`
	padding-inline-end: 40px;

	& > div > div {
		left: 50px !important;
	}
`;
