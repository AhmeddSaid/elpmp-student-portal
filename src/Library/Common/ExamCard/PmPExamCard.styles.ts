"use client";

import Image from "next/image";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const PmPExamCardShell = styled.div`
	border-radius: 25px;
	overflow: hidden;
	max-width: 366px;
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const PmPExamCardImage = styled(Image)`
	width: 100%;
	object-fit: cover;
`;

export const PmPExamCardBodyContainer = styled(Flexbox)`
	padding: 1.5rem;
	gap: 25px;
	flex-direction: column;
`;

export const PmPExamCardBody = styled.p`
	font-size: 18px;

	font-weight: 500;
`;

export const PmPExamCardInfo = styled.p`
	color: var(--grey-500);
`;
