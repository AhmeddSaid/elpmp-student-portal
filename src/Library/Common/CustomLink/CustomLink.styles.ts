"use client";
import Link from "next/link";
import styled from "styled-components";

type Props = { type: "primary" | "secondary"; disabled?: boolean; size: "md" | "sm" };
export const CustomLinkStyles = styled(Link)<Props>`
	width: fit-content;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	color: ${({ type }) => {
		switch (type) {
			case "primary":
				return "var(--Text-text-primary,#3259E8)";
			case "secondary":
				return "var(--Text-text-secondary, #626D7C)";
			default:
				return "var(--Text-text-primary,#3259E8)";
		}
	}};
	padding-inline: 10px;
	font-size: ${({ size }) => {
		switch (size) {
			case "md":
				return "1rem";
			case "sm":
				return ".875rem";
			default:
				return "1rem";
		}
	}};
	font-style: normal;
	font-weight: 600;
	line-height: ${({ size }) => {
		switch (size) {
			case "md":
				return "1.5rem";
			case "sm":
				return "1.25rem";
			default:
				return "1.5rem";
		}
	}};

	& :hover {
		color: ${({ disabled }) => (disabled ? "none" : "var(--Text-text-accent-hover, #213fc0)")};
	}

	&:focus {
		border-radius: var(--corner-02, 0.25rem);
		border: ${({ disabled }) =>
			disabled ? "none" : "2px solid var(--Border-border-accent, #3259e8)"};
	}
`;

export const CustomLinkLabel = styled.span<Props>`
	display: inline-block;
	color: ${({ disabled }) =>
		disabled ? "var(--Text-text-primary-muted, #A2ABB8)" : "var(--Text-text-primary,#3259E8)"};
`;
