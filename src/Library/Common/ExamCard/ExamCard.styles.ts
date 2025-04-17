"use client";

import Link from "next/link";
import styled from "styled-components";

export const ExamCardShell = styled(Link)`
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	background-color: white;
	border: 1px solid var(--Border-border-primary-muted, #e2e5eb);
	//margin-top: 30px;
	cursor: pointer;
	text-decoration: none;
	color: black;
	overflow: hidden;
	height: 100%;

	&:hover {
		background: var(--grey-800,);
	}

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	.imgContainer {
		position: relative;
	}
`;
export const ExamCardCaption = styled.div`
	padding: 24px;
	text-align: start;
`;

export const ExamCardTitle = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	max-height: 48px;
	word-break: break-word;
	//text-overflow: ellipsis;
	//overflow: hidden;
	//white-space: wrap;

	display: -webkit-box;
	max-width: 400px;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ExamCardDescription = styled.p`
	word-break: break-word;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-top: 8px;
	color: var(--Text-text-secondary, #626d7c);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 12px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
`;

export const ExamCardFooter = styled.div`
	margin-top: 12px;
`;
export const ExamCardFooter2 = styled.div`
	font-size: 13px;
	line-height: 22px;
	display: flex;
	gap: 4px;

	.expiration {
		color: var(--Text-text-secondary, #626d7c);
		text-align: center;
		font-variant-numeric: lining-nums proportional-nums;

		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 16px;
	}

	.expirationDate {
		color: var(--Text-text-primary, #000);
		text-align: center;
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 16px;
	}
`;
export const ColorData = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 1rem;
`;
