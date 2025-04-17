import React from "react";
import styled from "styled-components";

export interface InputType extends React.ComponentPropsWithoutRef<"input"> {
	label: string;
	type?: string;
	id?: string;
	className?: string;
	ErrorMessage?: string | undefined | null;
	placeholder: string;
	name?: string;
	disabled?: boolean;
	autoComplete?: string;
	readOnly?: boolean;
	required?: boolean;
	value?: string;
	locale?: "en" | "ar";
}

export const InputStyles = styled.input`
	vertical-align: baseline;
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1rem;
	outline: 2px solid transparent;
	outline-offset: -2px;
	padding: 0 1rem;
	border: 1px solid ${({ theme }) => theme.InputBorder};
	height: 3rem;
	background-color: #fff;
	color: ${({ theme }) => theme.black500};
	font-family: inherit;
	inline-size: 100%;
	transition:
		background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
		outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
	border-radius: 0.5rem;

	&:focus {
		outline: 1px solid var(--main-color);
		outline-offset: -1px;
	}

	&:disabled {
		cursor: not-allowed;
	}

	&::placeholder {
		color: ${({ theme }) => theme.placeholder};
	}

	&.error {
		border: 1px solid red;

		&:focus {
			outline: 1px solid var(--danger);
			outline-offset: -1px;
		}
	}
`;

export const InputShell = styled.div`
	margin-bottom: 1rem;
`;
