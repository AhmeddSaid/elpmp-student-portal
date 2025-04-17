import React from "react";
import { BadgeContainer, BadgeTitle } from "@/Library/Common/Badge/Badge.styles";

const Badge = ({
	color,
	size,
	label,
	Disabled,
	className,
	id,
}: {
	color: "gray" | "blue" | "green" | "red";
	size?: "small" | "xSmall" | "xxSmall";
	label: string;
	Disabled?: boolean;
	className?: string;
	id?: string;
}) => {
	return (
		<>
			<BadgeContainer className={className} id={id} disabled={Disabled} size={size} color={color}>
				<BadgeTitle disabled={Disabled} size={size}>
					{label}
				</BadgeTitle>
			</BadgeContainer>
		</>
	);
};

export default Badge;
