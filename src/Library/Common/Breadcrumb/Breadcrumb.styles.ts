"use client";

import Link from "next/link";
import styled from "styled-components";

export const BreadcrumbLabel = styled(Link)`
	color: var(--Text-text-secondary, #626d7c);
	font-variant-numeric: lining-nums proportional-nums;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem;
	user-select: none;

	text-transform: capitalize;
`;
