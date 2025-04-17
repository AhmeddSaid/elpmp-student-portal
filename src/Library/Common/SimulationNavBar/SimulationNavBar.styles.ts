"use client";

import styled from "styled-components";
import { Section } from "@/Library/Common/Grids/Grids";

export const SimulationNavBarContainer = styled.section`
	border-bottom: 1px solid #c3c9d1;
	//background: teal;
	position: fixed;
	left: 0;
	right: 0;
	border-bottom: 1px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Background-bg-primary, #fff);
	width: 100%;

	p {
		user-select: none;
	}
`;

export const SimulationNavBarShell = styled(Section)`
	padding-block: 18px;
	//border-bottom: 1px solid #c3c9d1;

	.NavBarTitle {
		font-size: 20px;
		font-weight: 600;
		line-height: 28px;
	}

	.numberOfQuestion {
		font-size: 16px;
		font-weight: 600;
		line-height: 28px;
	}

	.VerticalDottedDivider {
		padding-inline: 16px;
	}

	.TimeRemaining {
		font-size: 16px;
		font-weight: 600;
		color: #626d7c;
	}

	.EndReportTitle {
		color: var(--Text-text-primary, #000);
		text-align: center;
		font-variant-numeric: lining-nums proportional-nums;

		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 150% */
	}
`;
