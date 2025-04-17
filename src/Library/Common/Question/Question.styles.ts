"use client";

import Image from "next/image";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const QuestionShell = styled(Flexbox)`
	background: #eceaea;
	border-radius: 25px;
	margin-bottom: 25px;
	overflow: hidden;
`;

export const QuestionStyles = styled.p<{ dirIsLTR: boolean }>`
	font-size: 16px;
	padding: 1rem;
	line-height: 24px;
	text-align: start;
	order: ${({ dirIsLTR }) => (dirIsLTR ? "1" : "0")};
`;

export const QuestionImageStyles = styled(Image)<{ dirIsLTR: boolean }>`
	border-radius: var(--Radius-radius-05, 16px);
	order: ${({ dirIsLTR }) => (dirIsLTR ? "0" : "1")};
	object-fit: cover;
	cursor: pointer;
`;

export const ImageContainer = styled(QuestionImageStyles)`
	width: 100%;
	height: 100%;
	max-width: 60dvw;
	max-height: 60dvh;
	object-fit: cover;
	cursor: default;
	margin-top: 1rem;
`;

export const BigImage = styled.div`
	position: fixed;
	margin: auto;
	//left: 50%;
	top: 120px;

	z-index: 6000;
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
