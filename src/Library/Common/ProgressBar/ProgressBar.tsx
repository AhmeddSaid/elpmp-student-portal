import React from "react";
import {
	ProgressBarContainer,
	ProgressPercentage,
} from "@/Library/Common/ProgressBar/ProgressBar.styles";

const ProgressBar = ({
	progress,
	width = "sm",
}: {
	width?: "sm" | "fullWidth";
	progress: number;
}) => {
	return (
		<>
			<ProgressBarContainer width={width}>
				<ProgressPercentage progres={progress}> </ProgressPercentage>
			</ProgressBarContainer>
		</>
	);
};

export default ProgressBar;
