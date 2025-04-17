"use client";
import Link from "next/link";
import styled from "styled-components";

export const LanguageDropdown = styled.button`
	cursor: pointer;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: inherit;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.5;
	position: relative;
	display: inline-flex;
	flex-shrink: 0;
	justify-content: center;
	inline-size: max-content;
	outline: none;
	text-align: center;
	text-decoration: none;
	border-radius: 100rem;
	transition:
		background 70ms cubic-bezier(0, 0, 0.38, 0.9),
		box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9),
		border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
		outline 70ms cubic-bezier(0, 0, 0.38, 0.9);
	vertical-align: top;
	background-color: transparent;
	gap: 8px;
	align-items: center;

	&:disabled {
		cursor: not-allowed;
	}

	.Language {
		color: var(--Text-text-secondary, #626d7c);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}
`;

export const LanguageDropdownList = styled.div<{ openDropdown: boolean }>`
	width: fit-content;
	height: fit-content;
	position: absolute;
	overflow: hidden;
	display: ${({ openDropdown }) => (openDropdown ? "flex" : "none")};
	//padding: 0.5rem;
	flex-direction: column;
	border-radius: 0.5rem;
	background: var(--ffffff, #fff);
	box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.15);
	min-width: 75px;
`;

export const LangugaLink = styled(Link)``;

export const LanguageSwitchBtn = styled.button<{ isDisabled: boolean }>`
	height: 48px;
	width: 100%;
	display: block;
	cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")} !important;
	background: transparent;
	font-size: 0.875rem;
	color: ${({ isDisabled }) => (isDisabled ? "#60626C" : "var(--main-black)")} !important;

	&:hover {
		background: ${({ isDisabled }) => (isDisabled ? "" : "#4F29F3")} !important;
		color: ${({ isDisabled }) => (isDisabled ? "" : "#fff")} !important;
	}
`;
