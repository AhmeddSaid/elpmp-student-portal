"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const ExamDetailsShell = styled.div`

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-left: 2px solid var(--Border-border-primary-muted, #E2E5EB);
    padding: var(--Spacing-spacing-00, 0px) var(--Spacing-spacing-06, 24px);

    .title {
        color: var(--Text-text-secondary, #626d7c);
        font-variant-numeric: lining-nums proportional-nums;

        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
    }

    .number {
        color: var(--Text-text-primary, #000);
        font-variant-numeric: lining-nums proportional-nums;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
`;

export const TargetState = styled.div<{ state: "Needs-improvement" | "Above target" | "Target" }>`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	//background: var(--Icon-icon-accent-muted, #9482f2);
	background: ${({ state }) => {
		switch (state) {
			case "Needs-improvement":
				return "var(--Icon-icon-danger-muted, #EC7C6B)";

			case "Above target":
				return "var(--Icon-icon-success-muted, #6EB481)";
			case "Target":
				return "var(--Icon-icon-accent-muted, #9482f2)";
		}
	}};
`;

export const TableHeader = styled(Flexbox)`
	.NumberOfExams {
		color: var(--Text-text-primary, #000);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	.Exam {
		color: var(--Text-text-secondary, #626d7c);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	.divider {
		background: var(--Border-border-primary, #c3c9d1);
		width: 1px;
		height: 20px;
		margin-inline: 16px;
	}

	.ShowAll {
		display: flex;
		padding: var(--Spacing-spacing-03, 8px);
		justify-content: center;
		align-items: center;
		border-radius: var(--corner-03, 8px);
		border: 1px solid var(--Border-border-primary, #c3c9d1);
		margin-inline-start: 8px;

		p {
			color: var(--Text-text-primary, #000);
			font-variant-numeric: lining-nums proportional-nums;

			font-size: 12px;
			font-style: normal;
			font-weight: 600;
			line-height: 16px;
			display: flex;
			padding: 0px var(--Spacing-spacing-03, 8px);
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Divider = styled.div`
	background: var(--Border-border-primary-muted, #e2e5eb);
	height: 1px;
	position: absolute;
	left: 0;
	right: 0;
	top: -24px;
	//margin-block: 32px 24px;
`;

export const TableShell = styled.div`
	position: relative;
`;
