import Link from "next/link";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const AsideNAvBar = styled.div<{ $isOpen?: boolean; $language: string }>`
	padding-inline: 1rem;
	height: 100%;
	overflow: auto;
	padding-block: 8px;
	//background: var(--grey-1000, #f8f8f8);
	border-right: 0.5px solid var(--Border-border-primary, #c3c9d1);
	background: var(--Background-bg-secondary, #f3f4f7);
	position: fixed;
	left: ${({ $language }) => ($language === "en" ? 0 : "")}px;
	right: ${({ $language }) => ($language === "en" ? "" : 0)}px;
	top: 0;
	bottom: 0;
	width: ${props => (props.$isOpen ? "220px" : "75px")};
	transition: all 0.5s ease-in-out;
	z-index: 50000;

	&.AsideNAvBar::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 768px) {
		width: ${({ $isOpen }) => ($isOpen ? "220px" : "75px")};
	}
`;

export const LogoContainer = styled.div`
	height: 64px;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const LogoStyles = styled.p`
	color: var(--Main-Indigo, #4f29f3);
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.015rem;
	text-transform: uppercase;
`;

export const OpenButton = styled.button<{ $isOpen: boolean }>`
	position: absolute;
	top: 7rem;
	right: ${({ $isOpen }) => ($isOpen ? "0.5rem" : "1.75rem")};
	transition: right 0.3s ease;
	background-color: transparent;
	border: none;
	cursor: pointer;
	z-index: 100;
	@media (max-width: 768px) {
		left: 2rem;
		top: 1rem;
		padding-bottom: 2rem;
	}
`;

export const Overlay = styled.div`
	@media (max-width: 768px) {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 49999;
		cursor: pointer;
	}
`;
export const ValuesChild = styled.div`
	@media (max-width: 768px) {
		margin-top: 2rem;
	}

	//background: red;
	height: 100%;
	//min-height: calc(100% - 65px);
	//height: calc(100% - 65px);
	//display: flex;
	//justify-content: space-between;
	//flex-direction: column;
	//overflow: auto;
`;

export const MainLogo = styled(Link)`
	margin-top: 16px;
	margin-bottom: 48px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	row-gap: 16px;
`;

export const SideNavShell = styled(Flexbox)`
	height: 100%;

	.divider {
		width: 192px;
		height: 1px;
		opacity: 0.4;
		background: linear-gradient(
			90deg,
			rgba(57, 58, 65, 0) 0.55%,
			#9c9da6 28.47%,
			#9c9da6 72.08%,
			rgba(57, 58, 65, 0) 100%
		);
	}
`;
