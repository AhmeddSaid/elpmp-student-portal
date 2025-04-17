"use client";

import styled from "styled-components";

export const SubTitle = styled.p`
	position: relative;
	padding-block: 10px;
	padding-inline: px;
	font-size: 10px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	background-color: var(--sidebar-background);
	opacity: 0.5;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	&:after {
		position: absolute;
		content: "";
		top: 50%;
		left: 50px;
		width: calc(100% - 50px);
		min-width: 20px;
		height: 1px;
		background-color: gray;
		opacity: 0.3;
	}
`;
