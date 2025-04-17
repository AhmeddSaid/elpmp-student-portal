"use client";

import styled from "styled-components";

export const CheckboxLabel = styled.label<{ Disabled?: boolean }>`
	position: relative;
	user-select: none;
	display: inline-block;

	svg {
		position: absolute;
		z-index: 10;
		top: 0.5rem;
		right: 0.5rem;
	}
`;

export const CheckboxInput = styled.input`
	display: none;
	visibility: hidden;
	opacity: 0;

	& ~ svg {
		transition: all 0.3s ease-in-out;
	}

	& ~ #checked {
		display: none;
	}

	&:checked {
		~ #checked {
			display: block;
		}
		~ #transactionCardShell {
			border-radius: var(--Radius-radius-05, 1rem);
			border: 1px solid var(--Border-border-accent, #4a2be9);
			background: var(--Surface-surface-accent-muted, #f7f6fe);
		}
	}
`;
export const TransactionCardShell = styled.div`
	max-width: 10.4rem;
	display: flex;
	padding: var(--Spacing-spacing-06, 1.5rem);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--Spacing-spacing-03, 0.5rem);
	flex: 1 0 0;
	align-self: stretch;
	border-radius: var(--Radius-radius-05, 1rem);
	border: 1px solid var(--Border-border-primary, #c3c9d1);
	p {
		margin-block: 1.38rem;
	}
`;
