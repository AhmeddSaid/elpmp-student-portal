"use client";
import styled from "styled-components";

export const AvatarCustomStyles = styled.div<{ $Size: "md" | "sm" | "xs" | "lg" }>`
	width: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "48px";
			case "sm":
				return "40px";
			case "xs":
				return "32px";
			case "lg":
				return "120px";
			default:
				return "48px";
		}
	}};
	height: ${({ $Size }) => {
		switch ($Size) {
			case "lg":
				return "120px";
			case "md":
				return "48px";
			case "sm":
				return "40px";
			case "xs":
				return "32px";
			default:
				return "48px";
		}
	}};
	background-color: var(--Surface-surface-secondary, #e2e5eb);
	padding: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "1rem";
			case "sm":
				return "10px";
			case "xs":
				return "8px";
			default:
				return "1rem";
		}
	}};
	border-radius: 50%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const TopBadge = styled.div<{ $Size: "md" | "sm" | "xs" | "lg" }>`
	width: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "24px";
			case "sm":
				return "24px";
			case "xs":
				return "20px";
			default:
				return "24px";
		}
	}};
	height: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "20px";
			case "sm":
				return "20px";
			case "xs":
				return "16px";
			default:
				return "20px";
		}
	}};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: var(--Spacing-spacing-01, 2px) var(--Spacing-spacing-02, 4px);
	border-radius: var(--corner-05, 16px);
	background: var(--Surface-surface-info, #3259e8);
	position: absolute;
	top: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "-4px";
			case "sm":
				return "0";
			case "xs":
				return "0";
			default:
				return "-4px";
		}
	}};
	right: -1rem;

	p {
		color: var(--Text-text-white-on-color, #fff);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 2rem !important;
		font-style: normal;
		font-weight: 700;
		line-height: 16px;
	}
`;

export const BottomBadge = styled.div<{ $Size: "md" | "sm" | "xs" | "lg" }>`
	width: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "1rem";
			case "sm":
				return "1rem";
			case "xs":
				return "8px";
			default:
				return "1rem";
		}
	}};
	height: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "1rem";
			case "sm":
				return "1rem";
			case "xs":
				return "8px";
			default:
				return "1rem";
		}
	}};
	border-radius: 50%;
	background-color: #00823e;
	position: absolute;
	bottom: 0;
	right: 0;
`;

export const InnerPra = styled.p<{ $Size: "md" | "sm" | "xs" | "lg" }>`
	width: var(--Spacing-spacing-09, 48px);
	color: var(--Text-text-primary, #000);
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: ${({ $Size }) => {
		switch ($Size) {
			case "md":
				return "18px";
			case "sm":
				return "16px";
			case "xs":
				return "14px";
			case "lg":
				return "55px";
			default:
				return "18px";
		}
	}};
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
`;
