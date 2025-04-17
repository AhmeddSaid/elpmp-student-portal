"use client";

import styled from "styled-components";

export const LabelTextArea = styled.label<{ disable?: boolean }>`
	//color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem;

	color: ${({ disable }) => {
		switch (disable) {
			case true:
				return "var(--Text-text-primary-muted, #A2ABB8)";

			default:
				return "var(--Text-text-primary, #000)";
		}
	}};
`;

export const TextAreaContainer = styled.div`
	position: relative;
	display: flex;
`;

export const TextAreaStyle = styled.textarea<{
	disable?: boolean;
	statusss?: string;
}>`
	padding-inline: 1rem 3.25rem;
	padding-block: 0.75rem;
	min-height: 80px;
	max-height: 160px;
	outline: none;
	width: 100%;
	max-width: 100%;
	min-width: 100%;

	border-radius: var(--corner-03, 0.5rem);
	//border: 1px solid var(--Border-border-primary, #c3c9d1);
	//background: var(--Surface-surface-elevation, #fff);


	border: ${({ statusss }) => {
		switch (statusss) {
			case "error":
				return " 2px solid var(--Border-border-danger, #C32518)";

			case "Success":
				return "2px solid var(--Border-border-success, #00823E)";

			default:
				return " 1px solid var(--Border-border-primary, #c3c9d1)";
		}
	}};


	background: ${({ disable }) => {
		switch (disable) {
			case true:
				return "var(--Surface-surface-secondary-muted, #F7F8FB)";

			default:
				return "var(--Surface-surface-elevation, #fff)";
		}
	}};


	&:hover {
		//border: 1px solid var(--Border-border-primary-hover, #a2abb8);

		border: ${({ statusss }) => {
			switch (statusss) {
				case "error":
					return " 2px solid var(--Border-border-danger, #C32518)";

				case "Success":
					return "2px solid var(--Border-border-success, #00823E)";

				default:
					return " 1px solid var(--Border-border-primary-hover, #a2abb8)";
			}
		}};


	}

	&:focus {
		//border: 2px solid var(--Border-border-accent, #3259E8);
		border: ${({ statusss }) => {
			switch (statusss) {
				case "error":
					return " 2px solid var(--Border-border-danger, #C32518)";

				case "Success":
					return "2px solid var(--Border-border-success, #00823E)";

				default:
					return " 2px solid var(--Border-border-accent, #3259E8)";
			}
		}};


`;

export const TextAreaIcon = styled.div`
	position: absolute;

	top: 0.75rem;
	right: 0.75rem;
`;

export const CaptionTextArea = styled.p`
	color: var(--Text-text-secondary, #626d7c);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem; /* 142.857% */
`;
