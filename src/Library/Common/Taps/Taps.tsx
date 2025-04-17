import React, { ReactNode } from "react";
import {
	NumberDiv,
	NumberStyles,
	TapsLabel,
	TapsShell,
	UnderLine,
} from "@/Library/Common/Taps/Taps.styles";

const Taps = ({
	size = "medium",
	label,
	number,
	active,
	disable,
	underline,
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
			<TapsShell size={size} disable={disable} active={active}>
				<TapsLabel disable={disable} active={active} as={"label"} size={size}>
					{label}
				</TapsLabel>

				<div>{icon} </div>
				{number && (
					<NumberDiv active={active} disable={disable}>
						<NumberStyles>{number}</NumberStyles>
					</NumberDiv>
				)}

				{underline && <UnderLine disable={disable} active={active}></UnderLine>}
			</TapsShell>
		</>
	);
};

export default Taps;
