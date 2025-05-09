import React from "react";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import { RangeShell } from "@/Library/pages/ResultsReports/Range/Range.styles";

const Range = ({ title }: { title: string }) => {
	return (
		<RangeShell $justify={"space-between"} $align={"center"} $gap={8}>
			<div className={"arrowContainer"}>
				<svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512">
					<path
						fill="#c3c9d1"
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
					/>
				</svg>
			</div>
			<p>{title}</p>
			<Flexbox $justify={"end"} className={"arrowContainer"}>
				<svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512">
					<path
						fill="#c3c9d1"
						d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
					/>
				</svg>
			</Flexbox>
		</RangeShell>
	);
};

export default Range;
