"use client";

import styled from "styled-components";

export const ExamBar = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	background: white;
	z-index: 60002;
	box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.15);
	width: 100dvw;
	padding: 1rem 2rem;
	border-radius: 15px;
	top: 0;
	left: 0;
`;

export const ExamName = styled.h1`
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 700;
	text-transform: capitalize;
`;

export const ExplanationContainer = styled.div`
	position: relative;
	width: 100%;
	padding-inline: 1rem;
	padding-block: 0.3rem;

	&:before {
		position: absolute;
		left: 0;
		top: 0;
		content: "";
		background: var(--main-color, #4f29f3);
		height: 100%;
		width: 4px;
		border-radius: 5px;
	}
`;

export const TipsStyles = styled.span`
	font-weight: 800;
	display: block;
`;
