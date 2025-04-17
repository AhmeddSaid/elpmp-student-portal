import React from "react";
import TriangleRight from "@/Library/Common/Icongraphy/Triangle/TriangleRight";
import { CustomTooltipStyle } from "@/Library/Common/Tooltip/Tooltip.styles";

const Tooltip = ({ ArrowPosition, Body }: { ArrowPosition: string; Body: string }) => {
	return (
		<>
			<CustomTooltipStyle ArrowPosition={ArrowPosition}>
				<p>{Body}</p>

				{/*// TODO: Remove this logic and revamp it to css*/}
				<TriangleRight />
			</CustomTooltipStyle>
		</>
	);
};

export default Tooltip;
