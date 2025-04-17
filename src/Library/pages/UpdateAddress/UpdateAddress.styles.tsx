"use client";

import styled from "styled-components";

export const AddressHeadingContainer = styled.div`
	border-bottom: 1px solid lightgray;
	padding-bottom: 20px;
	margin-bottom: 32px;
`;

export const AddressHeading = styled.p`
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: -0.02em;
`;

export const AddressSubHeading = styled.p`
	margin-top: 12px;
	font-size: 16px;
	font-weight: 400;
	line-height: 28px;
	color: var(--black-700);
	opacity: 0.5;
`;

export const AddressInputsContainer = styled.div`
	border: 1px solid lightgray;
	border-radius: 24px;
	padding: 32px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	margin-bottom: 120px;
`;

export const RemoveButton = styled.button`
	width: fit-content;
	height: 100%;
	align-self: end;
	background: white;
`;

export const AddButton = styled.button`
	width: fit-content;
	height: 100%;
	padding: 0.7rem;
	border-radius: 10px;
	background: green;
`;

export const AnswerCheckBox = styled.div`
	align-self: end;
`;

export const QuestionDiv = styled.div`
	width: 100%;
`;
