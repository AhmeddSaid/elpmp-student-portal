import React from "react";
import { SubTitle } from "@/Library/Common/sideBarSubTitle/SideBarSubTitle.styles";

const SideBarSubTitle = ({ body }: { body: string }) => {
	return (
		<>
			<div>
				<SubTitle>{body}</SubTitle>
			</div>
		</>
	);
};

export default SideBarSubTitle;
