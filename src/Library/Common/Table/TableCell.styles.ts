"use client";
import styled from "styled-components";

export const TableCellCustomStyle = styled.div<{
	width: number;
	Type: "Table-Head" | "Table-Body";
}>`
	padding: 1rem 0.5rem;
	width: ${({ width }) => width}%;
	//width: 33%;
	//min-width: 33%;

	.buttonShell {
		width: 120px;
	}
`;

export const TableCellText = styled.div<{ center: boolean; Size?: "lg" | "md" | "sm" | "xs" }>`
	color: var(--secondary-black);
	//text-align: start;
	text-align: ${({ center }) => (center ? "center" : "start")};
	vertical-align: middle;
	font-variant-numeric: lining-nums proportional-nums;
	font-style: normal;
	font-weight: 600;
	font-size: ${({ Size }) => {
		switch (Size) {
			case "lg":
				return "18px";
			case "md":
				return "16px";
			case "sm":
				return "14px";
			case "xs":
				return "12px";
			default:
				return "16px";
		}
	}};

	line-height: ${({ Size }) => {
		switch (Size) {
			case "lg":
				return "28px";
			case "md":
				return "24px";
			case "sm":
				return "20px";
			case "xs":
				return "16px";
			default:
				return "24px";
		}
	}};

	a {
		color: var(--main-color);
		text-decoration: underline;
	}

	p {
		color: var(--Text-text-secondary, #626d7c);
		font-variant-numeric: lining-nums proportional-nums;
		font-family: Manrope;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}

	p.black {
		color: var(--Text-text-primary, #000);
	}
`;
