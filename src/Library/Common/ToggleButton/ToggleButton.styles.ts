"use client";

import styled from "styled-components";

export const Toggle = styled.label<{ disable?: boolean }>`
	display: flex;
	align-items: center;
	//justify-content: space-between;
	cursor: pointer;
	width: 32px;
	height: 18px;
	border-radius: 120px;
	position: relative;
	transition: background-color 0.2s;
	overflow: hidden;
	z-index: 4545454;
	&:hover {
		cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};
	}

	& #blue {
		background: ${({ disable }) => !disable && "#213fc0"};
	}

	& #white {
		background: ${({ disable }) => disable && "#A2ABB8"};
	}

	&:focus {
		//border: 1px solid black;#A2ABB8
		outline: 2px solid #3259e8;
		outline-offset: 2px;
	}
`;

export const ToggleBtn = styled.span`
	position: absolute;
	top: 2px;
	width: 14px;
	height: 14px;
	border-radius: 45px;
	background: white;
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
	transition: all 0.4s ease-in-out;
`;

export const ToggleInput = styled.input`
	height: 0;
	width: 0;
	display: none;
	transition: all 0.3s ease-in-out;

	&:not(:checked) ~ ${ToggleBtn} {
		left: 2px;
		//transition: all 1s ease-in-out;

		& ~ #white {
			display: block;
		}
	}

	&:checked ~ ${ToggleBtn} {
		//transition: all 0.4s ease-in-out;
		//right: 2px;
		left: calc(100% - 2px);
		transform: translatex(-100%);

		& ~ #blue {
			display: block;
		}
	}
`;

export const ToggleLabel = styled.label`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem;
`;

export const Hint = styled.p`
	color: var(--Text-text-secondary, #626d7c);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
`;

export const WhiteBg = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: -1;
	display: none;
	background: #e2e5eb;
`;
export const BlueBg = styled.div<{ disable?: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: -1;
	display: none;
	//background: #3259e8;

	background: ${({ disable }) => {
		switch (disable) {
			case true:
				return "#e2e5eb";
			case false:
				return "#3259e8";
			default:
				return "#3259e8";
		}
	}} !important;

	//& :hover {
	//	background: #213fc0;
	//}
`;
