import Link from "next/link";
import styled from "styled-components";
import { Flexbox } from "@/Library/Common/Grids/Grids";

export const Container = styled.div`
	//padding: 20px;
	background-color: #ffff;
`;

export const SocialGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 10px;
	cursor: pointer;
	margin-top: 40px;
`;

export const SocialItem = styled(Link)`
	background-color: white;
	flex: 1 1 calc(33.33% - 10px);
	border-radius: 12px;
	color: black;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SocialInfo = styled(Flexbox)`
	//display: flex;

	//& svg {
	//	width: 100%;
	//}
	//
	//align-items: center;
`;

export const SocialIcon = styled.div`
	margin-inline-end: 10px;
	font-size: 24px;
`;

export const SocialText = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SocialTitle = styled.span`
	font-weight: bold;
	font-size: 16px;
`;

export const SocialSubtitle = styled.span`
	color: #888;
	font-size: 14px;
`;

export const LinkIcon = styled.div`
	font-size: 24px;
	color: #888;
`;

export const AboutSection = styled.div`
	margin-top: 40px;
	padding: 2rem;
	background-color: white;
	border-radius: 12px;
	border: 1px solid var(--grey-800);
	margin-bottom: 120px;
	//box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

	& .supportParagraph {
		font-size: 16px !important;
		margin-top: 16px;
		line-height: 24px;
	}
`;

export const AboutSectionSlice = styled.div<{ border?: boolean }>`
	padding-block: 2rem 3rem;
	border-bottom: ${({ border }) => (!border ? "1px solid var(--grey-800)" : "none")};
`;

export const SocialSectionSlice = styled.div<{ border?: boolean }>`
	padding-block: 2rem 3rem;
	border-bottom: ${({ border }) => (border ? "1px solid var(--grey-800)" : "none")};
`;

export const AboutTitle = styled.h3`
	font-size: 18px;
	margin-bottom: 10px;
`;

export const AboutText = styled.p`
	font-size: 14px;
	color: #444;
	line-height: 1.6;
`;

export const AboutLink = styled.a`
	color: #007bff;
	text-decoration: none;
`;
