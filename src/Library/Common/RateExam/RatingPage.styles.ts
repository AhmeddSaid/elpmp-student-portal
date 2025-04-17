import styled from "styled-components";
import { Breakpoints, Row } from "@/Library/Common/Grids/Grids";

export const PageWrapper = styled.div`
	padding: 1rem;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	position: relative;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
`;

export const RateButton = styled.button`
	background-color: #ffd700;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 8px 16px;
	font-weight: bold;
	cursor: pointer;
`;
export const BorderDiv = styled.div`
	border-top: 1px solid var(--grey-800) !important;
	border-bottom: 1px solid var(--grey-800) !important;
	padding-block: 16px;

	.StateValue {
		margin-inline: 1rem;
	}
	@media screen and (min-width: ${Breakpoints.md}) {
		border-top: unset !important;
		border-bottom: unset !important;
		border-left: 1px solid var(--grey-800) !important;
		border-right: 1px solid var(--grey-800) !important;
		margin-inline: 2rem;
	}

	height: 100%;
`;
export const StatValue = styled.p`
	font-size: 24px;
	font-weight: bold;
`;

export const StatLabel = styled.p`
	font-size: 14px;
	color: var(--secondary-black);
	padding-bottom: 16px;
`;

export const StarRating = styled.div`
	display: flex;
	gap: 4px;
	justify-content: center;
`;

export const ReviewBreakdown = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding-top: 16px;
`;

export const BreakdownRow = styled(Row)`
	p {
		font-size: 14px;
		color: var(--secondary-black);
		align-items: end;
	}
`;

export const BarGrayBG = styled.div`
	background: var(--grey-900);
	display: flex;
	align-items: center;
	width: 100%;
	position: relative;
	height: 8px;
	border-radius: 4px;
`;

export const Bar = styled.div<{ width: number }>`
	background-color: orange;
	height: 8px;
	width: ${({ width }) => width}%;
	border-radius: 4px;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 50;
`;

export const ReviewList = styled.div`
	margin-top: 24px;
`;

export const Review = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 24px;
	//background: teal;

	&.userRating {
		padding-bottom: 16px;
		border-bottom: 2px solid var(--grey-800);
	}
`;

export const Avatar = styled.div`
	background-color: #aaa;
	color: #fff;
	width: 48px;
	padding: 1rem;
	height: 48px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: bold;
`;

export const ReviewContent = styled.div`
	margin-left: 16px;
	flex-grow: 1;
[]`;

export const ReviewerName = styled.p`
	font-size: 16px;
	font-weight: bold;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const ReviewDate = styled.p`
	font-size: 14px;
	color: grey;
`;

export const ReviewText = styled.p`
	margin-top: 8px;
	font-size: 14px;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: wrap;
`;

export const Helpful = styled.div`
	margin-top: 8px;
	display: flex;
	align-items: center;
	gap: 8px;
	color: grey;

	svg {
		cursor: pointer;
	}
`;
