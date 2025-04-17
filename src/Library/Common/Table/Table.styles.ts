"use client";

import styled from "styled-components";

export const TableCustomStyles = styled.table`
	border-collapse: collapse;
	border-spacing: 0;
	inline-size: 100%;
	margin-top: 16px;

	& tbody {
		inline-size: 100%;

		& tr {
			border-bottom: 1px solid var(--grey-900);
			width: 100%;
			height: 65px;

			&:hover {
				.startExamButton {
					display: flex;
				}
			}

			.width50 {
				& :first-child {
					width: 50%;
				}
			}

			&:hover {
				background: var(--Background-bg-secondary, #f3f4f7);
			}

			& td:first-child {
				//border-top-left-radius: 8px;
				padding-inline-start: 1.5rem;
			}

			& td:last-child {
				//border-top-right-radius: 8px;
				padding-inline-end: 1.5rem;
			}
		}
	}

	& thead {
		tr {
			background-color: var(--Surface-surface-secondary, #e2e5eb);

			& th {
				&:first-child {
					//border-top-left-radius: 8px;
					padding-inline-start: 1.5rem;
					text-align: start;
				}

				&:last-child {
					//border-top-right-radius: 8px;
					padding-inline-end: 1.5rem;
					text-align: start;
				}
			}
		}
	}
`;
