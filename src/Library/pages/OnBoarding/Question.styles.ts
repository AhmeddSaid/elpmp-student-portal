"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const QuestionShell = styled(Flexbox)`
	background: white;
	border-radius: 25px;
	margin-bottom: 25px;
	overflow: hidden;
	display: flex;
	text-align: center;
	justify-content: center;
`;

export const QuestionStyles = styled.p<{ dirIsLTR: boolean }>`
	font-size: 35px;
	padding: 1rem;
	order: ${({ dirIsLTR }) => (dirIsLTR ? "1" : "0")};
`;

export const EscapeContainer = styled.div`
	position: absolute;
	right: 0;
	top: -35px;
	color: white;
	background: gray;
	border-radius: 10px;
	padding: 5px;
	cursor: pointer;
`;
export const DarkLayer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 5000;
	background: rgba(7, 7, 7, 0.66);
`;
