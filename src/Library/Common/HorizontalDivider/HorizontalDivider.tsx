"use client";
import React from "react";
import styled from "styled-components";

const HorizontalDividerShell = styled.div`
	width: 100%;
	height: 2px;
	background: var(--Border-border-primary-muted, #e2e5eb);
	margin-block: 16px;
`;

export const WhatNextTitle = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 32px;
	margin-top: 16px;
`;
const HorizontalDivider = () => {
	return (
		<>
			<HorizontalDividerShell />
		</>
	);
};

export default HorizontalDivider;
