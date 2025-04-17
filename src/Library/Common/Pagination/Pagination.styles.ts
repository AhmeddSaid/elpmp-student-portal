"use client";

import styled from "styled-components";
import { ButtonBase } from "@/Library/Common/Button/Button.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const PaginationCustomStyle = styled(Flexbox)``;

export const NextButton = styled.button`
	${ButtonBase}

	border-radius: var(--corner-03, 0.5rem);
	height: 3rem;
	padding: 0.625rem;
	background: transparent;

	& span {
		font-variant-numeric: lining-nums proportional-nums;
		color: var(--Text-text-primary, #000);
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.5rem;
		padding-inline: 0.5rem;
	}

	&:hover {
		background: var(--Surface-surface-secondary-hover, #c3c9d1);
	}
`;
