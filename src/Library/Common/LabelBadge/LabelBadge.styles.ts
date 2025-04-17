"use client";
import styled from "styled-components";

export const CustomLabelBadgeStyle = styled.div`
	display: flex;
	height: 20px;
	padding: var(--Spacing-spacing-01, 2px);
	justify-content: center;
	align-items: center;
	border-radius: var(--corner-02, 4px);
	border: 1px solid var(--Border-border-secondary-muted, #c3c9d1);
	background: var(--Surface-surface-secondary-disabled, #e2e5eb);
`;

export const LabelBadgeText = styled.p<{ Disabled?: boolean }>`
	color: ${({ Disabled }) =>
		Disabled ? "var(--Text-text-secondary-muted, #A2ABB8)" : "var(--Text-text-secondary, #626d7c)"};
	font-variant-numeric: lining-nums proportional-nums;
	font-family: Poppins;
	font-size: 12px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
`;
