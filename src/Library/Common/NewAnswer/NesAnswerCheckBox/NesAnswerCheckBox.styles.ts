"use client";

import styled from "styled-components";

export const NesAnswerCheckBoxShell = styled.div`
	input {
		display: none;
	}
`;

export const AnswerChecked = styled.div<{ active: boolean }>`
	border: 2px solid #c3c9d1;
	border-radius: 8px;
	width: 28px;
	height: 28px;
	overflow: hidden;

	div {
		//background: #4a2be9;
		background: ${({ active }) => (active ? "#4a2be9;" : "transparent")};
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const NewAnswerRadioShell = styled.div<{ active: boolean }>`
	.RadioShell {
		//background: #4a2be9;

		background: ${({ active }) => (active ? "#4a2be9" : "white")};
		border: ${({ active }) => (active ? "" : "2px solid #c3c9d1")};
		//border: 3px solid #c3c9d1;

		width: 28px;
		min-width: 28px;
		height: 28px;
		min-height: 28px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		display: none;
	}
`;
