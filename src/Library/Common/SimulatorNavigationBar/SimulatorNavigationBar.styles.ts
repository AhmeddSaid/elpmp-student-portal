"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const SimulatorNavigationBarShell = styled.div`
	padding: 0px 64px;
	border-top: 1px solid #c3c9d1;
	position: fixed;
	height: 76px;
	left: 0;
	bottom: 0;
	width: 100%;
	background: white;
	z-index: 555;
`;

export const TabShell = styled(Flexbox)<{ active?: boolean }>`
	border-bottom: ${({ active }) => (active ? "2px solid #4a2be9" : "")};
	height: 100%;
	cursor: pointer;
	.BodyTag {
		font-size: 14px;
		font-weight: 600;
		margin-inline-start: 20px;

		color: ${({ active }) => (active ? "black" : "#626D7C")};
	}
`;

export const NumberTag = styled.div<{ active?: boolean }>`
	//background: ;
	background: ${({ active }) => (active ? "#4a2be9" : "#626D7C")};
	padding: 0px 8px;
	border-radius: 16px;
	min-height: 20px;
	color: white;
	font-size: 14px;
	font-weight: 600;
	margin-inline-end: 12px;
`;
