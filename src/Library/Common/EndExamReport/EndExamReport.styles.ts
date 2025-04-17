"use client";

import styled from "styled-components";

export const EndExamReportShell = styled.div<{ EndExamReport: boolean }>`
	background: white;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: ${({ EndExamReport }) => (EndExamReport ? "" : "none")};

	.noQuestionShell {
		height: 100%;
	}

	.NoQuestionBody {
		color: #000;
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px;
	}
`;
