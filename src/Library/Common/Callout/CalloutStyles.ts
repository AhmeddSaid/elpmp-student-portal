import styled, { DefaultTheme } from "styled-components";

const getColor = (variant: "info" | "warning" | "error" | "success", theme: DefaultTheme) => {
	switch (variant) {
		case "success":
			return theme.success;
		case "warning":
			return "yellow";
		case "error":
			return theme.danger;
		default:
			return theme.Primary;
	}
};

export const CalloutShell = styled.div<{
	variant: "info" | "warning" | "error" | "success";
	size?: string;
}>`
	padding: 1rem;
	border-radius: 0.25rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	background-color: ${({ variant, theme }) => getColor(variant, theme)};

	& svg {
		margin-inline-end: 1rem;
	}

	& > * {
		box-sizing: border-box;
		flex-shrink: 0;
	}
`;

export const CalloutTitle = styled.p<{
	variant: "info" | "warning" | "error" | "success";
}>`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: #fff;
`;
