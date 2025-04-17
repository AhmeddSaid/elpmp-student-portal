"use client";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const InstructionsHeader = styled.div`
	border-bottom: 1px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Background-bg-primary, #fff);
	width: 100%;
	padding-block: 18px;
`;

export const InstructionCaptionShell = styled.div`
	padding-top: 3rem;
	padding-inline-end: 2.12rem;
`;
export const InstructionExamModeShell = styled.div`
	padding: 2.375rem var(--Spacing-spacing-07, 2rem);
	margin-bottom: 2.5rem;
	border-left: 1px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Surface-surface-secondary-muted, #f7f8fb);
	min-height: 100dvh;

	table,
	th,
	td {
		border: 1px solid var(--Border-border-primary, #c3c9d1);
		border-collapse: collapse;
	}

	table {
		width: 100%;
		overflow: hidden;
		border-radius: var(--Radius-radius-03, 0.5rem);

		th,
		td {
			padding: var(--Spacing-spacing-05, 1rem) 0.5rem;
			background-color: var(--Surface-surface-elevation, #fff);

			svg {
				margin: auto;
			}
		}

		tbody {
			tr {
				& > :first-child {
					p {
						text-align: start !important;
					}
				}
			}
		}
	}
`;

export const RecommendationBox = styled(Flexbox)`
	padding: 1rem 1rem 1.25rem 1rem;
	border-radius: var(--corner-03, 0.5rem);
	border: 1px solid var(--Border-border-info-muted, #b4a7f6);
	background: var(--Surface-surface-info-muted, #f7f6fe);
`;

export const InstructionFooter = styled.div`
	border-top: 1px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Surface-surface-secondary-muted, #f7f8fb);
	padding-block: 0.75rem;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
`;
export const InstructionsTableShell = styled.div`
	border: 1px solid var(--Border-border-primary, #c3c9d1);
	border-radius: var(--Radius-radius-03, 0.5rem);
`;
