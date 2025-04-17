"use client";

import styled from "styled-components";

export const CourseCardShell = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background-color: white;
	box-shadow: inset 0 0 0 1px gray;
	margin-top: 30px;
	cursor: pointer;
	overflow: hidden;
	padding: 24px;

	&:hover {
		background: var(--grey-800,);
	}
	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;
export const CourseCardCaption = styled.div`
	padding-top: 24px;
`;

export const CourseCardTitle = styled.p`
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;

	word-break: break-word;
	overflow: hidden;
	color: var(--black);
`;

export const CourseCardDescription = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	word-break: break-word;
	margin-top: 8px;
	color: var(--black-700);
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	opacity: 0.5;
`;

export const CourseCardFooter = styled.span`
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-top: 10px;
	opacity: 0.5;
`;
