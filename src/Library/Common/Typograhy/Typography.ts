"use client";
import styled, { css, DefaultTheme } from "styled-components";
import { HeadingType } from "./TypographyProps";

const getColor = ({
	color = "black",
}: {
	theme: DefaultTheme;
	color?: "success" | "white" | "brand" | "black" | "secondary" | "danger" | "gray";
}): string => {
	switch (color) {
		case "white":
			return "#fff";
		case "success":
			return "var(--success)";
		case "brand":
			return "var(--main-color)";
		case "secondary":
			return "var(--secondary-black)";
		case "danger":
			return "var(--danger)";
		default:
			return "var(--primary-black)";
	}
};

const getWeight = ({ bold }: { bold?: boolean }): string => (bold ? "600" : "400");

const textAlign = ({ center }: { center?: boolean }): string => (center ? "center" : "");

// TODO: check Font-weight for typography and line heights

const baseStyles = css<HeadingType>`
	color: ${getColor};
	text-align: ${textAlign};
`;

export const Heading1 = styled.h1<HeadingType>`
	font-size: 2.5rem;
	font-weight: 600;
	line-height: 100%;
	${baseStyles}
`;

export const Heading2 = styled.h2<HeadingType>`
	font-size: 2rem;
	font-weight: 600;
	line-height: 3rem;
	@media (max-width: 540px) {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	${baseStyles}
`;

export const Heading3 = styled.h3<HeadingType>`
	font-size: 1.75rem;
	font-weight: 600;
	line-height: 1.5rem;
	${baseStyles}
`;

export const BigParagraph = styled.p<HeadingType>`
	font-size: 1.25rem;

	font-weight: ${getWeight};
	line-height: 1.75rem;
	${baseStyles}
`;

export const Paragraph = styled.p<HeadingType>`
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const SmallParagraph = styled.p<HeadingType>`
	font-size: 0.75rem;
	margin-block: 0.5rem;
	line-height: 1.25rem;
	font-weight: ${getWeight};
	${baseStyles}
`;

export const LabelStyles = styled.label<{
	color?: "success" | "white" | "brand" | "black" | "secondary" | undefined;
}>`
	display: inline-block;
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: ${getColor};
	font-weight: 400;
	user-select: none;
`;

export const HeadingXSmall = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
`;

export const HeadingLarge = styled.p`
	color: var(--Text-text-primary, #000);
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.5rem;
`;
export const LabelSmall = styled.p<{ color?: string }>`
	color: ${({ color }) => color};
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem;
`;

export const LabelMedium = styled.p<{ color?: string }>`
	color: ${({ color }) => color};
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem;
`;
export const LabelLarge = styled.p<{ color?: string }>`
	align-self: stretch;
	color: ${({ color }) => color};
	text-align: center;
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.75rem;
`;

export const ParagraphSmall = styled.p`
	align-self: stretch;
	color: var(--Text-text-info-muted, #9482f2);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
`;
