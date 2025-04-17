"use client";

import styled from "styled-components";

export const ProgressBarContainer = styled.div<{ width?: "sm" | "fullWidth" }>`
	border-radius: 10px;
	//width: 100%;

	width: ${({ width }) => (width === "fullWidth" ? "100%" : "100px")};
	height: 8px;
	background: lightgray;
	position: relative;
	overflow: hidden;
`;

export const ProgressPercentage = styled.div<{ progres?: number }>`
	position: absolute;
	top: 0;
	left: 0;
	background: var(--Main-Indigo, #4f29f3);
	height: 100%;
	width: ${({ progres }) => `${progres}%`};
	transition: all 0.3s ease-in-out;
`;
