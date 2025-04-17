"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const NavBarShell = styled.div`
	margin-inline-start: 215px;
	padding: 24px;
	//background: white;
	//max-width: 1092px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 500;
	border-bottom: 0.5px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Background-bg-primary, #fff);
	p {
		font-size: 14px;
		color: black;
		opacity: 0.5;
	}

	.NavBarContainer {
		width: 100%;
	}
`;

// export const AvatarMenu = styled(Flexbox)`
// 	background: white;
// 	position: absolute;
// 	top: 100%;
// 	right: -20px;
// 	/* margin-inline-end: 24px; */
// 	margin-bottom: 1.5rem;
// 	border-radius: 10px;
// 	padding: 0.5rem;
// 	display: inline;
// 	flex-direction: column;
// 	gap: 15px;
// 	width: 200px;
// 	user-select: none;
// 	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.075);
// `;
export const AvatarMenu = styled(Flexbox)<{ locale: string }>`
	background: white;
	position: absolute;
	top: 100%;
	margin-bottom: 1.5rem;
	right: ${({ locale }) => (locale === "ar" ? "" : "-20px")};
	left: ${({ locale }) => (locale === "ar" ? "0" : "")};
	border-radius: 10px;
	padding: 0.5rem;
	display: inline;
	flex-direction: column;
	gap: 15px;
	width: 200px;
	user-select: none;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.075);
	direction: ${({ locale }) => (locale === "ar" ? "rtl" : "ltr")};
	text-align: ${({ locale }) => (locale === "ar" ? "right" : "left")};
`;
export const AvatarContainer = styled.div`
	position: relative;
	cursor: pointer;
`;
export const ItemBody = styled.div`
	border-radius: 0.5rem;
	text-align: center;
	padding: 0.5rem;
	&:hover {
		background: var(--grey-800);
	}
`;
export const NotificationBox = styled.div`
	position: relative;
	cursor: pointer;
`;

export const NotificationMenu = styled.div<{ notificationOpen?: boolean; locale: string }>`
	background: white;
	border-radius: 25px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.075);
	user-select: none;
	padding-inline: 1rem;
	padding-block: 1rem;
	overflow-y: scroll;
	height: 300px;
	position: absolute;
	top: 100%;
	display: ${({ notificationOpen }) => (notificationOpen ? "block" : "none")};
	${({ locale }) => (locale === "ar" ? "left: 0;" : "right: 0;")}
	width: 500px;
	direction: ${({ locale }) => (locale === "ar" ? "rtl" : "ltr")};
	text-align: ${({ locale }) => (locale === "ar" ? "right" : "left")};

	&::-webkit-scrollbar {
		width: 0px;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 4px grey;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: lightgray;
		border-radius: 10px;
	}
`;
export const NotificationHeadingShell = styled.div`
	//background: teal;
	border-bottom: 1px solid #dadada;
	//width: 100%;
	display: flex !important;
	justify-content: space-between;
	width: 100%;
	background: white;
	/* position: absolute; */
	top: 0;
	left: 0;
	right: 0;
`;

export const NotificationHeading = styled.p`
	/* padding-inline: 1rem; */
	padding-block: 1rem;
	font-size: 20px;
	background: #fff;
	width: 50%;
	/* margin: auto; */
	/* position: fixed; */
	background: #fff;
	z-index: 50000000;
	//font-weight: 500;
`;

export const MarkAll = styled.button`
	padding-inline: 1rem;
	padding-block: 1rem;
	font-size: 14px;
	background: white;
	cursor: pointer;
	opacity: 0.5;
	color: var(--main-color);
`;

export const NotificationContainer = styled.div`
	padding-inline: 1rem;
	padding-block: 0.5rem;
	display: flex !important;
	gap: 20px;
	border-bottom: 1px solid #dadada;
	cursor: pointer;
	&:last-child {
		border-bottom: 0;
	}
	&:hover {
		background: lightgray;
	}
`;

export const NotificationBody = styled.div`
	font-size: 16px;
	color: gray;
`;
export const NotificationInfo = styled.p`
	font-size: 12px;
	opacity: 0.5;
`;
export const NotificationBodySpan = styled.span`
	font-weight: 600;
	font-size: 16px;
	color: black;
`;
export const EmptyDivStar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
`;
export const ItemContainer = styled(Flexbox)``;

export const LangBox = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000000;
	display: flex;
	justify-content: center;
	align-items: center;

	.langRow {
		background-color: #e2e5eb;
		width: 320px;
		height: 200px;
		border-radius: 24px;
		//padding: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		//align-content: space-between;
		position: relative;
		//row-gap: 8px;

		div.lang-name {
			cursor: pointer;
			border: none;
			background: transparent;
			padding: 0.5rem;
			font-size: 1.125rem;
			font-style: normal;
			font-weight: 500;
			line-height: 150%;
		}

		div.language-name {
			cursor: not-allowed;
			opacity: 0.25;
			padding: 0.5rem;
			font-size: 1.125rem;
			font-style: normal;
			font-weight: 500;
			line-height: 150%;
		}
		.exit {
			position: absolute;
			top: 16px;
			right: 0;
			width: 50px;
			display: inline-flex;
		}

		button {
			cursor: pointer;
			background-color: transparent;
		}
	}
`;

export const NavBarHeader = styled.span`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
`;

export const MailIconShell = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 1000px;
	background: var(--Surface-surface-secondary, #e2e5eb);
`;
