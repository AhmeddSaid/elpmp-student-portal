import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const SideBarItemShell = styled(Flexbox).withConfig({
	shouldForwardProp: prop => prop !== "isOpen",
})<{ isOpen?: boolean; active: string }>`
	position: relative;
	padding-inline: 10px;
	padding-block: 8px;
	height: 40px;
	width: ${({ isOpen }) => (isOpen ? "100%" : "fit-content")};
	font-size: 14px;
	border-radius: 10px;
	align-items: center;
	transition:
		color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
		background-color 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;

	background: ${({ active }) => (active === "true" ? "var(--grey-800)" : "transparent")};
	cursor: ${({ active }) => (active === "true" ? "default" : "pointer")};
	margin-bottom: 2px;

	svg path {
		fill: ${({ active }) => active === "true" && "var(--main-color)"};
	}

	&:hover {
		background: var(--grey-800);
		color: var(--main-color, #4f29f3);

		svg {
			color: var(--main-color, #4f29f3);
		}
	}
`;

export const Tooltip = styled.div`
	display: block;
	position: absolute;
	left: 100%;
	top: 50%;
	transform: translateY(-50%) translateX(10%);
	transition: ease-out 5s;
	background: #333;
	color: #fff;
	padding: 5px 10px;
	border-radius: 4px;
	white-space: nowrap;
	z-index: 10000000;
	opacity: 0.9;
`;

export const SideBarItemBody = styled.p<{ $active?: boolean; $isOpen?: boolean }>`
	font-size: 14px;
	color: ${({ $active }) => ($active ? "var(--Text-text-accent, #4A2BE9)" : "#000")};
	display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
	transition: all 0.3s ease;
	opacity: ${({ $active }) => ($active ? 1 : 0.7)};

	font-variant-numeric: lining-nums proportional-nums;
	font-style: normal;
	font-weight: ${({ $active }) => ($active ? "600" : "500")};
	line-height: 20px;
`;
