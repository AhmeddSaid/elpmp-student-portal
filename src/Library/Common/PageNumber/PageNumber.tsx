import React from "react";
import { PageNumberCustomStyle } from "@/Library/Common/PageNumber/PageNumber.styles";

const PageNumber = ({ Number, Current }: { Number: number; Current?: boolean }) => {
	return (
		<PageNumberCustomStyle Current={Current} href={`${Number}`}>
			<p>{Number}</p>
		</PageNumberCustomStyle>
	);
};

export default PageNumber;
