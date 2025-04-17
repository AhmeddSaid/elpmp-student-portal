"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const NewAnswerShell = styled(Flexbox)<{
	type: string;
	state?: string;
	isAnswered: boolean;
}>`
	user-select: none;
	padding: 18px 16px;
	margin-top: 8px;
	min-height: 67px;
	width: 100%;
	max-width: 100%;

	background: ${({ state }) => {
		switch (state) {
			case "correct":
				return "#F0FCF2";
			case "wrong":
				return "#FFF4F1";
			case "selected":
				return " var(--Surface-surface-info-muted, #F7F6FE)";
			case "unselected":
				return "";

			default:
				return "white";
		}
	}};
	border-radius: 12px;

	&:hover {
		//background: #f7f8fb;
		background: ${({ isAnswered }) => (isAnswered ? "" : "#f7f8fb")};
		cursor: ${({ isAnswered }) => (isAnswered ? "" : "pointer")};

		.SingleAnswer {
			//display: block;
			display: ${({ type }) => (type === "single" ? "block" : "none")};
		}

		.multipleAnswer {
			//display: block;

			display: ${({ type, isAnswered }) => {
				if (isAnswered) {
					return;
				} else {
					if (type === "multi") {
						return "block";
					} else {
						return "none";
					}
				}
			}};
		}

		.questionIndex {
			//display: none;
			display: ${({ isAnswered }) => (isAnswered ? "flex" : "none")};
		}
	}

	border: ${({ state }) => {
		switch (state) {
			case "correct":
				return " 2px solid  #9DCBA8";
			case "wrong":
				return " 2px solid  #F5A79A";
			case "active":
				return "2px solid var(--Border-border-accent-muted, #B4A7F6)";
			default:
				return " 2px solid  #c3c9d1";
		}
	}};
	margin-bottom: 8px;

	.SingleAnswer {
		// display: ${({ state }) => (state === "active" ? "block" : "none")};
		max-width: 28px;
		width: 28px;

		display: ${({ state, type }) => {
			if (type === "single" && state === "active") {
				return "block";
			} else {
				return "none";
			}
		}};
	}

	.multipleAnswer {
		max-width: 28px;
		width: 28px;
		// display: ${({ state }) => (state === "active" ? "block" : "none")};

		display: ${({ state, type }) => {
			if (type === "multi" && state === "active") {
				return "block";
			} else {
				return "none";
			}
		}};
	}

	.Icon {
		padding-left: 16px;
	}
`;

export const AnswerNumber = styled.div<{ state?: string }>`
	//border: 1px solid #c3c9d1;
	border: 2px solid
		${({ state }) => {
			switch (state) {
				case "correct":
					return "transparent";
				case "wrong":
					return "transparent";

				default:
					return "#c3c9d1";
			}
		}};
	display: ${({ state }) => (state === "active" ? "none" : "flex")};
	border-radius: 8px;
	max-width: 28px;
	min-width: 28px;
	width: 28px;
	height: 28px;
	//display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	//color: #626d7c;

	// color: ${({ state }) => (state ? "black" : "#626d7c")};

	color: ${({ state }) => {
		switch (state) {
			case "correct":
				return "white";
			case "wrong":
				return "white";

			default:
				return "black";
		}
	}};

	background: ${({ state }) => {
		switch (state) {
			case "correct":
				return "#6EB481";
			case "wrong":
				return "#EC7C6B";

			default:
				return "white";
		}
	}};
`;

export const AnswerBody = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	color: black;
	width: 100%;
	line-break: anywhere;
	user-select: none;
`;
