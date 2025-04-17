"use client";

import styled from "styled-components";

export const PasswordHeading = styled.p`
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: -0.02em;
`;

export const PasswordSubHeading = styled.p`
	margin-top: 12px;
	font-size: 16px;
	font-weight: 400;
	line-height: 28px;
	color: var(--black-700);
`;

export const PasswordHeadingContainer = styled.div`
	border-bottom: 1px solid lightgray;
	padding-bottom: 20px;
	margin-bottom: 32px;
`;

export const PasswordInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 120px;
	border: 1px solid lightgray;
	border-radius: 24px;
	padding: 32px;
`;
