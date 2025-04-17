import React from "react";
import {
	ColoredDiv,
	ProgressBarShell,
	ProgressIndicator,
} from "@/Library/pages/ResultsReports/ProgressBar/ProgressBar.styles";

const ProgressBar = ({
	bgColor,
	title,
	indicator,
}: {
	bgColor: string;
	title: string;
	indicator?: boolean;
}) => {
	return (
		<ProgressBarShell indicator={indicator} $direction={"column"} $gap={8}>
			<ColoredDiv bgColor={bgColor}>
				{indicator && (
					<ProgressIndicator $direction={"column"} $align={"center"}>
						<p>You</p>
						<div />
					</ProgressIndicator>
				)}
			</ColoredDiv>
			<p>{title}</p>
		</ProgressBarShell>
	);
};

export default ProgressBar;
