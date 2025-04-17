"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const AnswerComponentShell = styled(Flexbox)<{
	status?: "correct" | "incorrect";
	question?: string;
}>`
	border-radius: var(--Radius-radius-04, 0.75rem);
	//border: 1px solid var(--Border-border-info-muted, #b4a7f6);
	border: ${({ status, question }) => {
		if (!question) return "1px solid var(--Border-border-info-muted, #b4a7f6)";
		switch (status) {
			case "correct":
				return "1px solid var(--Border-border-success-muted, #9DCBA8)";
			case "incorrect":
				return "1px solid var(--Border-border-danger-muted, #F5A79A)";
			default:
				return "1px solid var(--Border-border-info-muted, #b4a7f6)";
		}
	}};
	background: ${({ status, question }) => {
		if (!question) return "var(--Surface-surface-secondary-muted, #F7F8FB)";
		switch (status) {
			case "correct":
				return "var(--Surface-surface-success-muted, #F0FCF2)";
			case "incorrect":
				return "var(--Surface-surface-danger-muted, #FFF4F1)";
			default:
				return "var(--Surface-surface-secondary-muted, #F7F8FB)";
		}
	}};
	padding: 1.25rem 1rem 1.25rem 1.5rem;

	p {
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem;
	}
`;

export const QuestionInAnswer = styled(Flexbox)<{
	status?: "correct" | "incorrect";
}>`
	p {
		border-radius: var(--Radius-radius-04, 0.75rem);
		border: ${({ status }) => {
			switch (status) {
				case "correct":
					return "1px solid var(--Border-border-success-muted, #9DCBA8)";
				case "incorrect":
					return "1px solid var(--Border-border-danger-muted, #F5A79A)";
				default:
					return "1px solid var(--Border-border-info-muted, #b4a7f6)";
			}
		}};
		background: var(--Surface-surface-elevation, #fff);
		padding: 1rem;
		flex-grow: 1;
	}
`;
