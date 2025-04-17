import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import { ExamTitle, PageHeaderContainer } from "@/Library/pages/ExamPage/ExamPage.styles";

const PageHeader = ({
	title,
	subTitle,
	num,
}: {
	title: string;
	subTitle: string;
	num?: number;
}) => {
	return (
		<>
			<PageHeaderContainer $gap={4} $direction={"column"}>
				<Flexbox $align={"center"} $gap={8}>
					<ExamTitle>{title}</ExamTitle>
					{num && <p className={"number"}>{num}</p>}
				</Flexbox>
				{/*<ExamSubTitle>{subTitle}</ExamSubTitle>*/}
			</PageHeaderContainer>
		</>
	);
};

export default PageHeader;
