"use client";

import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const AllQuestionContainer = styled.div`
	width: 100%;

	background: white;
	//position: absolute;
	//top: 0;
	//right: 0;
	border-radius: 20px;
	overflow: hidden;
	height: 100dvh;
	overflow-y: auto;
	box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.15);
	padding-bottom: 1rem;
`;

export const AllQuestionHeader = styled(Flexbox)`
	position: sticky;
	top: 0;
	height: 50px;
	width: 100%;
	padding: 0.5rem;
	padding-inline: 2rem;
	background: white;
	box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.15);
`;

export const QuestionContaner = styled.div<{ dimmed?: boolean }>`
	background: rgb(236, 234, 234);
	width: 100%;
	padding: 1rem;
	//flex-grow: 0;
	border-radius: 20px;
	cursor: ${({ dimmed }: { dimmed?: boolean }) => (dimmed ? "not-allowed" : "pointer")};
	opacity: ${({ dimmed }: { dimmed?: boolean }) => (dimmed ? "25%" : "100%")};
	user-select: none;

	& p {
		font-size: 0.875rem;
		line-height: 1.5rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: var(--secondary-black);
		@supports (-webkit-line-clamp: 2) {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: initial;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
`;

export const FlagContainer = styled.div<{ isFlagged: boolean }>`
	visibility: ${({ isFlagged }) => (isFlagged ? "visible" : "hidden")};
`;
