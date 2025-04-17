"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const AnswerContainer = styled.div<{
	statusss?: "unselected" | "selected" | "correct" | "wrong";
	isAnswered?: boolean;
}>`
	cursor: ${({ isAnswered }) => (isAnswered ? "default" : "pointer")};
	border-radius: 20px;
	padding: 1rem;
	border: ${({ statusss }) => {
		switch (statusss) {
			case "correct":
				return "1px solid green";
			case "wrong":
				return "1px solid red";
			case "selected":
				return "1px solid var(--main-color, #4f29f3)";
			default:
				return "1px solid white";
		}
	}};
	box-shadow: ${({ statusss }) => {
		switch (statusss) {
			case "correct":
				return " green 1px 2px 0px 0";

			case "wrong":
				return " red 2px 2px 0px 0";

			case "selected":
				return "blue 2px 2px 0px 0";

			default:
				return "rgba(99, 99, 99, 0.2) 0 2px 8px 0";
		}
	}};
	margin-bottom: 10px;

	&:hover {
		background: ${({ statusss, isAnswered }) =>
			isAnswered ? "" : statusss === "unselected" && "#e3e3e3"};
	}
`;

export const IconStyles = styled.button`
	height: 24px;
	background: rgb(244, 245, 245);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;
	font-size: 14px !important;

	&:hover {
		background: #e3e3e3;
	}
`;

export const AnswerBody = styled(Flexbox)<{ dirIsLTR: boolean }>`
	order: ${({ dirIsLTR }) => (dirIsLTR ? "1" : "0")};
	gap: 0.5rem;
`;
export const AnswerIndex = styled(Flexbox)<{ dirIsLTR: boolean }>`
	order: ${({ dirIsLTR }) => (dirIsLTR ? "0" : "1")};
	flex-shrink: 0;

	& > * > * {
		flex-shrink: 0;
	}
`;
