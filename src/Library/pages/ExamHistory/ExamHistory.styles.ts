"use client";

import styled from "styled-components";
import { Row } from "@/Library/Common/Grids/Grids";

export const ExamHistoryShell = styled.div`
	//padding-top: 111px;
	//padding-left: 250px;
	//background: teal;
	margin-bottom: 100px;
`;

export const ExamHistoryCard = styled(Row)`
	//margin: auto;
	border-radius: 50px;
	width: 100%;
	padding: 2rem;
	gap: 32px;
	background: #dcd8d8fc;
	//justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	box-shadow: inset 0 0 0 1px gray;
`;

export const ExamHistoryCardTitle = styled.p`
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: -0.02em;
`;

export const UlCard = styled(Row)`
	//padding-inline: 2rem;

	margin-top: 25px;

	li {
		padding-top: 32px;
	}
`;

export const VideoContainer = styled.div`
	border-radius: 50px;
	overflow: hidden;
	width: 100%;
	max-width: 540px;
`;
