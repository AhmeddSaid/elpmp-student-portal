"use client";

import styled from "styled-components";

export const CustomTooltipStyle = styled.div<{ ArrowPosition: string }>`
	display: inline-flex;
	user-select: none;
	color: var(--Text-text-primary-inverse, #fff);
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px; /* 142.857% */
	padding: var(--Spacing-spacing-03, 8px) var(--Spacing-spacing-04, 12px);
	border-radius: var(--corner-03, 8px);
	background: var(--Text-text-primary-inverse, #000);
	position: relative;
	width: fit-content;

	justify-content: ${({ ArrowPosition }) => {
		switch (ArrowPosition) {
			case "left":
				return "start";
			case "right":
				return "end";
			case "top":
				return "center";
			case "bottom":
				return "center";
			default:
				return "start";
		}
	}};

	align-items: ${({ ArrowPosition }) => {
		switch (ArrowPosition) {
			case "left":
				return "center";
			case "right":
				return "center";
			case "top":
				return "start";
			case "bottom":
				return "end";
			default:
				return "center";
		}
	}};

	svg {
		fill: var(--Text-text-primary-inverse, #000);
		position: absolute;
		transform: ${({ ArrowPosition }) => {
			switch (ArrowPosition) {
				case "left":
					return "rotate(180deg)";
				case "right":
					return "-rotate(0deg)";
				case "bottom":
					return "rotate(90deg)";
				case "top":
					return "rotate(-90deg)";
				default:
					return "rotate(0deg)";
			}
		}};
		top: ${({ ArrowPosition }) => {
			switch (ArrowPosition) {
				case "bottom":
					return "91%";
				default:
					return "";
			}
		}};
		bottom: ${({ ArrowPosition }) => {
			switch (ArrowPosition) {
				case "top":
					return "90%";
				default:
					return "";
			}
		}};
		left: ${({ ArrowPosition }) => {
			switch (ArrowPosition) {
				case "right":
					return "100%";
				default:
					return "";
			}
		}};
		right: ${({ ArrowPosition }) => {
			switch (ArrowPosition) {
				case "left":
					return "100%";
				default:
					return "";
			}
		}};
	}
`;
