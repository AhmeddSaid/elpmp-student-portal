import React from "react";
import ChevronLeft from "@/Library/Common/Icongraphy/ChevronLeft/ChevronLeft";
import ChevronRight from "@/Library/Common/Icongraphy/ChevronRight/ChevronRight";
import PageNumber from "@/Library/Common/PageNumber/PageNumber";
import { NextButton, PaginationCustomStyle } from "@/Library/Common/Pagination/Pagination.styles";

const Pagination = ({ next, previous }: { next?: boolean; previous?: boolean }) => {
	return (
		<PaginationCustomStyle>
			{previous && (
				<NextButton>
					<ChevronLeft />
					<span>previous</span>
				</NextButton>
			)}

			<PageNumber Current Number={1} />
			<PageNumber Number={2} />
			<PageNumber Number={3} />
			<PageNumber Number={4} />
			<PageNumber Number={5} />

			{next && (
				<NextButton>
					<span>Next</span>
					<ChevronRight />
				</NextButton>
			)}
		</PaginationCustomStyle>
	);
};

export default Pagination;
