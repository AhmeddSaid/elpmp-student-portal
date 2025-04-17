"use client";
import styled from "styled-components";

export const CheckboxInput = styled.input`
	display: none;
	visibility: hidden;
	opacity: 0;

	& ~ svg {
		margin-block: 0.25rem;
		transition: all 0.3s ease-in-out;
	}

	& ~ #checked {
		display: none;
	}

	&:checked {
		~ #checked {
			display: block;
		}

		~ #unchecked {
			display: none;
		}
	}
`;
export const CheckboxContainer = styled.div`
	display: flex;
`;

export const CheckboxLabel = styled.label<{ $Disabled?: boolean }>`
	display: flex;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem;
	user-select: none;
	cursor: ${({ $Disabled }) => ($Disabled ? "not-allowed" : "pointer")};

	& svg {
		margin-inline-end: 0.5rem;
	}

	&:hover {
		& > div > span {
			color: ${({ $Disabled }) =>
				$Disabled ? "var(--Text-text-primary-muted, #A2ABB8)" : "var(--Text-text-primary, #000)"};
		}
	}
`;

export const LabelHintContainer = styled.div`
	margin-inline-start: 0.5rem;
`;

export const CheckboxHint = styled.p<{ $Disabled?: boolean }>`
	color: ${({ $Disabled }) =>
		$Disabled ? "var(--Text-text-primary-muted, #A2ABB8)" : "var(--Text-text-secondary, #626d7c)"};
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
`;

export const CheckboxLabelStyles = styled.span<{ $Disabled?: boolean }>`
	display: inline-block;

	color: ${({ $Disabled }) =>
		$Disabled ? "var(--Text-text-primary-muted, #A2ABB8)" : "var(--Text-text-secondary, #626D7C)"};
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem;
`;
