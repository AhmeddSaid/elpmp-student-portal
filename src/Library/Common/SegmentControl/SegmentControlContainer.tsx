import React from "react";
import { SegmentControlSection } from "@/Library/Common/SegmentControl/SegmentControl.styles";

const SegmentControlContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<SegmentControlSection>{children}</SegmentControlSection>
		</>
	);
};

export default SegmentControlContainer;
