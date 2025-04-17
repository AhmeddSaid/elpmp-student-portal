"use client";
import styled from "styled-components";
import { Breakpoints, Flexbox } from "@/Library/Common/Grids/Grids";
import { Heading2 } from "@/Library/Common/Typograhy/Typography";

export const ExamInfoSection = styled.div`
	text-align: start;
	margin-block: 40px;

	&.Exam2pageHeader {
		p {
			text-align: center;
			@media screen and (min-width: ${Breakpoints.lg}) {
				text-align: start;
			}
		}
	}

	.ExamInfo {
		margin: 8px auto;

		@media screen and(min-width: ${Breakpoints.sm}) {
			margin: unset;
		}
	}
`;

export const ExamInfoTitle = styled(Heading2)`
	margin-bottom: 20px;
`;

export const ExamPageShellContainer = styled.section`
	position: relative;
`;
export const PopUpRatingShell = styled.div<{ RatingPopUp: boolean }>`
	position: fixed;
	text-align: start;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.16);
	//display: flex;
	justify-content: center;
	align-items: center;
	z-index: 55555;
	display: ${({ RatingPopUp }) => (RatingPopUp ? `none` : `flex`)};

	.PopUpContanier {
		.PopUpHeader {
			svg {
				//position: absolute;
				//right: 10px;
				//top: 10px;
				z-index: 123132;
				cursor: pointer;
			}
		}

		position: relative;
		width: 50%;
		background: white;
		border-radius: 24px;
		padding: 2rem;
	}
`;

export const ExamPageShell = styled.div`
	width: 100%;
	text-align: center;
`;

export const ExamTitle = styled.p`
	text-transform: capitalize;
	//margin-bottom: 8px;
	color: var(--Text-text-primary, #000);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.75rem;
	padding-block: 8px;
	@media (max-width: 375px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const ExamSubTitle = styled.p`
	color: var(--Text-text-primary-muted, #a2abb8);
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
`;

export const ExamOption = styled(Flexbox)<{ active?: boolean }>`
	padding-inline: 12px;
	font-size: 14px;
	border-radius: 8px;
	align-items: center;
	width: fit-content;
	height: 36px;
	transition: all 0.2s;
	background: ${({ active }) => (active ? "var(--grey-800)" : "")};
	cursor: pointer;
	color: black !important;

	&:hover {
		background: var(--grey-900);
		transition: all 0.2s;
	}
`;

export const ExamhistoryDate = styled.p`
	margin-top: 8px;
	font-size: 16px;
	font-weight: 700;
	line-height: 18px;
	color: var(--black-700);
	opacity: 0.5;
`;

export const FinishedExam = styled(Flexbox)`
	padding: 2.5rem;
	border-radius: 30px;
	justify-content: center;
	width: 100%;
	transition: all 0.2s;
	margin-top: 20px;
	box-shadow: inset 0 0 0 1px gray;
	cursor: pointer;
	background: white;
	box-sizing: border-box;
	overflow: hidden;
	flex-direction: column;

	@media screen and (min-width: ${Breakpoints.sm}) {
		padding: 1rem 2rem !important;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		//width: fit-content;
	}

	& .imageCaption {
		flex-direction: column;
		@media screen and (min-width: ${Breakpoints.sm}) {
			flex-direction: row;
		}

		& .caption {
			flex-direction: column;
			@media screen and (min-width: ${Breakpoints.sm}) {
				flex-direction: row;
			}
		}
	}
`;

export const FinishedExamImage = styled.div`
	border-radius: 50%;
	overflow: hidden;
	width: 50px;
	height: 50px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 377px) {
		width: 1rem !important;
		height: 1rem !important;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;

export const ExamName = styled.p`
	margin-bottom: 4px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	opacity: 0.5;

	@media (max-width: 375px) {
		font-size: 10px;
		line-height: 14px;
		white-space: normal;
	}
`;

export const ExamScore = styled.p`
	font-size: 18px;
	font-weight: 700;
	line-height: 26px;
	margin-bottom: 8px;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-transform: capitalize;

	@media (max-width: 375px) {
		font-size: 16px;
		line-height: 22px;
		white-space: normal;
	}
`;

export const DivStyles = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	color: inherit;
	opacity: 0.5;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-block: 4px;
	@media (max-width: 375px) {
		font-size: 12px;
		line-height: 18px;
		white-space: normal;
	}
`;

export const ExamHistoryInfo = styled(Flexbox)`
	flex-direction: column;
	justify-content: space-between;
	@media screen and (min-width: ${Breakpoints.sm}) {
		align-items: center;
	}
`;

export const PageHeaderContainer = styled(Flexbox)`
	//border-bottom: 1px solid var(--grey-800);
	//padding-bottom: 20px;
	margin-bottom: 4px;

	.number {
		color: var(--Text-text-secondary, #626d7c);
		font-variant-numeric: lining-nums proportional-nums;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`;

export const ExamModesBk = styled.div`
	position: fixed;
	background: var(--primary-black);
	opacity: 0.55;
	width: 100dvw;
	height: 100dvh;
	z-index: 100000;
	top: 0;
	left: 0;
`;

export const ExamModesShell = styled.div`
	width: 60dvw;
	max-height: 80dvh;
	background-color: #fff;
	padding: 2rem;
	border-radius: 1.5rem;
	position: fixed;
	z-index: 1000000;
	top: 10%;
	left: 20%;
	overflow: hidden;
	overflow-y: auto;
`;
