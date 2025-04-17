"use client";

import styled from "styled-components";

export const ProfileHeadingContainer = styled.div`
	border-bottom: 1px solid lightgray;
	padding-bottom: 20px;
	margin-bottom: 32px;
`;

export const ProfileHeading = styled.p`
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: -0.02em;
`;

export const ProfileSubHeading = styled.p`
	margin-top: 12px;
	font-size: 16px;
	font-weight: 400;
	line-height: 28px;
	color: var(--black-700);
	opacity: 0.5;
`;

export const ProfileInputsContainer = styled.div`
	border: 1px solid lightgray;
	border-radius: 24px;
	padding: 32px;
	margin-bottom: 120px;
`;
export const ProfileEditAvatar = styled.p`
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
	cursor: pointer;
`;
