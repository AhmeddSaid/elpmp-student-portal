import styled from "styled-components";

export const DropDownWrapper = styled.div`
	position: relative;
	margin-bottom: 1rem;
`;

export const DropDownButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: white;
	border-width: 1px;
	border-color: rgba(209, 213, 219, var(--tw-border-opacity));
	padding: 0.5rem;
	font-size: 1rem;
	line-height: 1.4rem;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
	}
`;

export const SVG = styled.div<{ isOpen: boolean }>`
	margin-left: 4px;
	height: 1rem;
	width: 1.2rem;
	transition: transform 0.3s ease;
	transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
export const OptionMenu = styled.div<{ isOpen: boolean }>`
	overflow: hidden;
	max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
	transition: max-height 0.3s ease-in-out;
	background-color: white;
	border: 1px solid rgba(209, 213, 219, var(--tw-border-opacity));
	border-radius: 0.375rem;
	margin-top: 0.5rem;
`;

export const OptionRow = styled.div`
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: white;
	border-bottom: 1px solid rgba(209, 213, 219, var(--tw-border-opacity));
	cursor: pointer;
`;

export const Label = styled.label`
	font-size: 0.875rem;
	line-height: 1.25rem;
	color: rgba(55, 65, 81, var(--tw-text-opacity));
`;

export const SvgTest = styled.button`
	width: 30px;
	height: 40px;
	border: none;
	background-color: transparent;
`;
