"use client";
import styled from "styled-components";

export const BoxShell = styled.li`
	border: solid 1px #c3c9d1;
	border-radius: 8px;
	padding: 10px 16px;
	background-color: #f7f8fb;

	p {
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.25rem;

		span {
			color: var(--Text-text-primary, #000);
			font-variant-numeric: lining-nums proportional-nums;
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.25rem;
		}
	}
`;
