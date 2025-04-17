import React, { ReactNode } from "react";
import {
	SegmentControlLabel,
	SegmentControlShell,
} from "@/Library/Common/SegmentControl/SegmentControl.styles";
import { NumberDiv, NumberStyles, UnderLine } from "@/Library/Common/Taps/Taps.styles";

const SegmentControl = ({
	size = "medium",
	label,
	number,
	active = false,
	disable = false,
	underline = false,
	icon,
}: {
	size?: string;
	label?: string;
	number?: number;
	active?: boolean;
	disable?: boolean;
	underline?: boolean;
	icon?: ReactNode;
}) => {
	return (
		<>
			<SegmentControlShell active={active} size={size} disable={disable}>
				<SegmentControlLabel disable={disable} active={active} as={"label"} size={size}>
					{label}
				</SegmentControlLabel>

				{number && (
					<NumberDiv disable={disable}>
						<NumberStyles>{number}</NumberStyles>
					</NumberDiv>
				)}
				<div>{icon}</div>

				{underline && <UnderLine disable={disable} active={active}></UnderLine>}
			</SegmentControlShell>
		</>
	);
};

export default SegmentControl;

//
//
// 		<>
// 			<SegmentControlShell>
// 				<SegmentControlContainer>
//

// 				</SegmentControlContainer>
// 				<SegmentControlContainer active={active}>
// 					<Taps label={"label"} number={110} />
// 				</SegmentControlContainer>
// 			</SegmentControlShell>
// 		</>
// 	);
// };
//
// export default SegmentControl;
