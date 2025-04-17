"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const SBDropDownShell = styled.div`
	width: 100%;
	border-radius: 10px;
	user-select: none;
	//overflow: hidden;
	//overflow-y: auto;
	//background: black;
`;

export const SBDropDownHeader = styled(Flexbox)<{ SBDisOpen: boolean }>`
	height: 36px;
	font-size: 14px;
	padding-inline: 10px;
	border-radius: 10px;

	&:hover {
		background: var(--grey-800);
		transition:
			color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
			background-color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
	}

	& #ArrowDownRotate {
		transition: all 0.225s ease-in;
		rotate: ${({ SBDisOpen }) => (SBDisOpen ? "" : "180deg")};
	}

	//
`;

export const SBDropDownBody = styled.div`
	padding-block: 5px;
`;

export const SideBarDropDownParagraph = styled.p`
	font-size: 14px;
	color: black;
	opacity: 0.5;
`;

export const SBDropDownOption = styled(Flexbox)`
	border-radius: 10px;
	font-size: 14px;
	height: 36px;
	//background: gray;
	width: 100%;
	padding-inline: 10px;
	align-items: center;
	margin-block: 2px;
	justify-content: space-between;

	&:hover {
		background: var(--grey-800);
		transition:
			color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
			background-color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
	}

	span {
		text-decoration: none;
		color: black;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 145px;
	}
`;

export const SBDropDownOptionState = styled.div<{ selected?: boolean }>`
	width: 25px;
	height: 25px;
	//background: #e2ddfe;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ selected }) => (selected ? "#e2ddfe" : "transparent")};
	border-radius: 50%;
	//border: 2px solid gray;

	border: ${({ selected }) => (selected ? "" : "1px solid #e3e3e3")};
`;

export const SideBarExamLink = styled.div`
	//overflow: auto;
	//height: 100%;
`;
