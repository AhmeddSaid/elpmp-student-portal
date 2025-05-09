import React from "react";
import { Col, Flexbox } from "@/Library/Common/Grids/Grids";
import {
	ExamHistoryCard,
	ExamHistoryCardTitle,
	UlCard,
} from "@/Library/pages/ExamHistory/ExamHistory.styles";

const ExamHistoryCardShell = ({ header, titles }: { header: string; titles: string[] }) => {
	return (
		<>
			<ExamHistoryCard $justify={"space-between"}>
				<Col $md={5}>
					<ExamHistoryCardTitle>{header}</ExamHistoryCardTitle>
				</Col>
				<UlCard as={"ul"} $justify={"space-between"}>
					{titles.map((title, index) => {
						return (
							<>
								<Col $md={6} as={"li"}>
									<Flexbox $gap={12}>
										{/*<svg*/}
										{/*	width="24px"*/}
										{/*	height="24px"*/}
										{/*	strokeWidth="1.5"*/}
										{/*	viewBox="0 0 24 24"*/}
										{/*	fill="none"*/}
										{/*	xmlns="http://www.w3.org/2000/svg"*/}
										{/*	color="#000000"*/}
										{/*>*/}
										{/*	<path*/}
										{/*		d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"*/}
										{/*		fill="#000000"*/}
										{/*		stroke="#000000"*/}
										{/*		strokeWidth="1.5"*/}
										{/*		strokeLinecap="round"*/}
										{/*		strokeLinejoin="round"*/}
										{/*	></path>*/}
										{/*	<path*/}
										{/*		d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z"*/}
										{/*		stroke="#000000"*/}
										{/*		strokeWidth="1.5"*/}
										{/*		strokeLinecap="round"*/}
										{/*		strokeLinejoin="round"*/}
										{/*	></path>*/}
										{/*</svg>*/}
										<Flexbox $gap={8} $align={"start"}>
											<p>{index + 1}-</p>
											<p>{title}</p>
										</Flexbox>
									</Flexbox>
								</Col>
							</>
						);
					})}
				</UlCard>
			</ExamHistoryCard>
		</>
	);
};

export default ExamHistoryCardShell;
