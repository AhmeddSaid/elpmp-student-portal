"use client";

import styled from "styled-components";

export const TagContanier = styled.div<{
	size?: "xsmall" | "small" | "medium" | "large" | "fullwidth";
	bgcolor?: "primary" | "success" | "error";
}>`
	width: fit-content;

	display: flex;
	padding: ${({ size }) => {
		switch (size) {
			case "large":
				return "12px";
			case "medium":
				return "8px";
			case "small":
				return "4px";
			case "xsmall":
				return "2px";
		}
	}};

	height: ${({ size }) => {
		switch (size) {
			case "large":
				return "3.25rem";
			case "medium":
				return "2.5rem";
			case "small":
				return "1.75rem";
			case "xsmall":
				return "1.25rem";
		}
	}};
	justify-content: center;
	align-items: center;
	border-radius: ${({ size }) => {
		switch (size) {
			case "large":
				return "0.5rem";
			case "medium":
				return "0.5rem";
			case "small":
				return "0.25rem";
			case "xsmall":
				return "0.25rem";
		}
	}};
	border: ${({ bgcolor }) => {
		switch (bgcolor) {
			case "primary":
				return "var(--Surface-surface-info, #3259E8)";
			case "success":
				return "var(--Surface-surface-success-disabled, #D8EDDC)";
			case "error":
				return "var(--Surface-surface-danger-disabled, #FDDAD5)";
			default:
				return "var(--Surface-surface-info, #3259E8)";
		}
	}};
	//background: var(--Surface-surface-accent-disabled, #c8dbff);
	background: ${({ bgcolor }) => {
		switch (bgcolor) {
			case "primary":
				return "var(--Surface-surface-info, #3259E8)";
			case "success":
				return "var(--Surface-surface-success-disabled, #D8EDDC)";
			case "error":
				return "var(--Surface-surface-danger-disabled, #FDDAD5)";
			default:
				return "var(--Surface-surface-info, #3259E8)";
		}
	}};

	&:focus {
		border-radius: ${({ size }) => {
			switch (size) {
				case "large":
					return "0.5rem";
				case "medium":
					return "0.5rem";
				case "small":
					return "0.25rem";
				case "xsmall":
					return "0.25rem";
			}
		}};
		border: 2px solid var(--Background-bg-primary, #fff);
		background: var(--Surface-surface-accent-disabled, #c8dbff);

		/* State/Focus */
		box-shadow: 0 0 0 2px #3259e8;
	}
`;

export const TagTitle = styled.span<{
	size?: "xsmall" | "small" | "medium" | "large" | "fullwidth";
	disable?: false | true;
	fcolor?: "primary" | "success" | "error";
}>`
	padding: ${({ size }) => {
		switch (size) {
			case "large":
				return "1.125rem";
			case "medium":
				return "0.5rem";
			case "small":
				return "0.25rem";
			case "xsmall":
				return "0.125rem";
		}
	}};

	//#3259e8
	color: ${({ fcolor }) => {
		switch (fcolor) {
			case "primary":
				return "#fff";
			case "success":
				return "green";
			case "error":
				return "red";
			default:
				return "var(--Surface-surface-info, #3259E8)";
		}
	}};
	font-variant-numeric: lining-nums proportional-nums;

	/* Label/Large */
	font-size: ${({ size }) => {
		switch (size) {
			case "large":
				return "1.125rem";
			case "medium":
				return "1rem";
			case "small":
				return "0.875rem";
			case "xsmall":
				return "0.75rem";
		}
	}};
	font-style: normal;
	font-weight: 600;
	line-height: 1.75em;
`;
