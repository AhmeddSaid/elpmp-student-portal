import React from "react";
import {
	CustomLabelBadgeStyle,
	LabelBadgeText,
} from "@/Library/Common/LabelBadge/LabelBadge.styles";

const LabelBadge = ({ BadgeBody, Disabled }: { BadgeBody: string; Disabled?: boolean }) => {
	return (
		<>
			<CustomLabelBadgeStyle>
				<LabelBadgeText Disabled={Disabled}>{BadgeBody}</LabelBadgeText>
			</CustomLabelBadgeStyle>
		</>
	);
};

export default LabelBadge;
