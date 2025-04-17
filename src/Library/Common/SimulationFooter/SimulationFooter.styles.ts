"use client";

import styled from "styled-components";

export const SimulationFooterShell = styled.div<{ openExplenation?: boolean }>`
	border-top: 1px solid #c3c9d1;
	position: fixed;
	bottom: 0;
	width: 100%;
	//left: 0;
	//right: 0;
	background: white;
	margin-top: 80px;

	.viewBody {
		font-size: 16px;
		font-weight: 600;

		color: ${({ openExplenation }) => (openExplenation ? "#4a2be9" : "white")};

		//color: #4a2be9;
	}

	.viewExplanationButton {
		//border: 2px solid #4a2be9;
		border-radius: 8px;
		border: ${({ openExplenation }) =>
			openExplenation ? "2px solid #4a2be9" : "2px solid transparent"};

		padding: 12px;
		cursor: pointer;
		user-select: none;
		background: ${({ openExplenation }) => (openExplenation ? "white" : "black")};

		path {
			fill: ${({ openExplenation }) => (openExplenation ? "" : "#a2abb8")};
		}
	}

	padding: 12px 64px;

	.divider {
		padding-inline: 47px 32px;
	}
`;
