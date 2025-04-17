"use client";

import styled, { css } from "styled-components";

export const ButtonBase = css`
	box-sizing: border-box;
	padding: 0;
	border: 0;
	margin: 0;
	font-family: inherit;
	font-size: 100%;
	vertical-align: baseline;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.28572;
	position: relative;
	display: inline-flex;
	flex-shrink: 0;
	justify-content: center;
	border-radius: 0;
	margin: 0;
	cursor: pointer;
	inline-size: max-content;
	max-inline-size: 20rem;
	outline: none;
	text-align: start;
	text-decoration: none;
`;

export const ButtonStyle = styled.button<{ size?: string; $bgcolor?: string; disabled: boolean }>`
	${ButtonBase};
	user-select: none;
	border: ${({ $bgcolor }) =>
		$bgcolor === "gost" ? "1px solid var(--Border-border-primary, #C3C9D1)" : ""};
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	border-radius: var(--corner-03, 0.5rem);
	font-size: ${({ size }) => (size === "fullWidth" ? "18px" : "")};
	width: ${({ size }) => (size === "fullWidth" ? "100%" : "")};
	//border: 1px solid transparent;

	border: ${({ $bgcolor }) =>
		$bgcolor === "gost" ? "1px solid #C3C9D1 " : "1px solid transparent"};

	background: ${({ $bgcolor, disabled }) => {
		if (disabled) {
			switch ($bgcolor) {
				case "primary":
					return "var(--Surface-surface-accent-disabled, #C8DBFF)";
				case "secondary":
					return "transparent";
				case "gost":
					return "transparent";
				case "danger":
					return "var(--Surface-surface-danger-disabled, #FDDAD5)";
			}
		} else {
			switch ($bgcolor) {
				case "primary":
					return "var(--main-color, #4f29f3)";
				case "secondary":
					return "transparent";
				case "gost":
					return "transparent";
				case "danger":
					return "var(--Surface-surface-danger, #C32518)";
			}
		}
	}};

	height: ${({ size }) => {
		switch (size) {
			case "medium":
				return "3rem";
			case "small":
				return "2.5rem";
			case "xsmall":
				return "2rem";
			case "fullWidth":
				return "2rem";
		}
	}};

	padding: ${({ size }) => {
		switch (size) {
			case "medium":
				return "var(--Spacing-spacing-04, 0.75rem)";
			case "fullWidth":
				return "var(--Spacing-spacing-04, 1.2rem)";

			case "small":
				return "0.625rem";

			case "xsmall":
				return "var(--Spacing-spacing-03, 0.5rem)";
		}
	}};

	justify-content: center;
	align-items: center;

	&:hover {
		background: ${({ $bgcolor, disabled }) => {
			if (disabled) {
				return "";
			} else {
				switch ($bgcolor) {
					case "primary":
						return "var(--Surface-surface-accent-hover, #213FC0)";

					case "secondary":
						return "var(--Surface-surface-secondary-hover, #C3C9D1)";

					case "gost":
						return "var(--Surface-surface-secondary-hover, #C3C9D1)";
					case "danger":
						return "var(--Surface-surface-danger-hover, #9E0200)";
				}
			}
		}};
	}

	&:focus {
		box-shadow: 0px 0px 0px 2px #3259e8;
		border: 2px solid var(--Background-bg-primary, #fff);
	}
`;

export const ButtonCaption = styled.p<{ size?: string; $bgcolor?: string; disable: boolean }>`
	padding-inline: 0.5rem;

	font-size: ${({ size }) => {
		switch (size) {
			case "medium":
				return "1rem";

			case "small":
				return "0.875.5rem";

			case "xsmall":
				return "0.75rem";
		}
	}};

	color: ${({ $bgcolor, disable }) => {
		if (disable) {
			return "var(--Text-text-primary-muted, #A2ABB8)";
		} else {
			switch ($bgcolor) {
				case "primary":
					return " var(--Text-text-primary-inverse, #FFF)";

				case "secondary":
					return "var(--Text-text-primary, #000)";

				case "gost":
					return "var(--Text-text-primary, #000)";
				case "danger":
					return " var(--Text-text-primary-inverse, #FFF)";
			}
		}
	}};
`;

export const IndexStyles = styled.div`
	font-size: 12px;
	border: 2px solid gray;
	width: 18px;
	height: 18px;
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`;
