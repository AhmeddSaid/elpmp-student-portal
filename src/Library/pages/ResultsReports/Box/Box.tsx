import React from "react";
import { BoxShell } from "@/Library/pages/ResultsReports/Box/Box.styles";

const Box = ({ title, subTitle }: { title?: string; subTitle: string }) => {
	return (
		<BoxShell>
			<p>
				{title} <span>{subTitle}</span>
			</p>
		</BoxShell>
	);
};

export default Box;
