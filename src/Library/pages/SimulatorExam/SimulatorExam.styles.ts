"use client";

import styled from "styled-components";
import { Flexbox, Row } from "@/Library/Common/Grids/Grids";

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

export const ButtonSectionHistory = styled(ButtonSection)`
	width: 100%;
	padding: 12px;
	margin-top: 80px;

	& ${Row} {
		width: 100%;
	}
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

	z-index: 200000;
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
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;
	justify-content: ${({ dirIsLTR }) => (dirIsLTR ? "end" : "start")};
`;

export const TimerStyles = styled.div`
	padding-inline-end: 40px;

	& > div > div {
		left: 50px !important;
	}
`;

export const ExitBackGround = styled(Flexbox)<{ exit?: boolean }>`
	background: rgba(7, 7, 7, 0.44);
	z-index: 60001;
	display: ${({ exit }) => (exit ? "" : "none")};
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;

	justify-content: center;
	align-items: center;
`;

export const ExitDiv = styled.div`
	width: 400px;
	height: 100px;
	background: white;
	border-radius: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
`;

export const PauseBackGround = styled.div<{ pause?: boolean }>`
	position: fixed;
	display: ${({ pause }) => (pause ? "" : "none")};
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100dvw;
	height: 100dvh;
	background: rgba(128, 128, 128, 0.71);
	z-index: 70001;
	filter: blur(8px);
	-webkit-filter: blur(8px);
`;
