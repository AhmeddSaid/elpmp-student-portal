"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Common/Grids/Grids";

export const ExamInfoShell = styled(Flexbox)`
	background: var(--grey-900);
	//max-width: 240px;
	padding: 2rem 1rem;
	border-radius: 20px;
	width: 100%;
	text-align: center;

	@media screen and (min-width: ${Breakpoints.md}) {
		width: 240px;
	}
`;

export const IconContainer = styled.div`
	width: 40px;
	height: 40px;
	background-color: var(--main-color);
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;

	path {
		fill: white;
	}
`;
