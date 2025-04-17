import React, { ReactNode } from "react";
import {
	DropdownMenuItemInner,
	DropdownMenuItemStyles,
	DropdownMenuItemText,
} from "@/Library/Common/Dropdown/DropdownMenuItem/DropdownMenuItem.styles";
import { Flexbox } from "@/Library/Common/Grids/Grids";

const DropdownMenuItem = ({
	leadIcon,
	trailIcon,
	body,
	badge,
}: {
	leadIcon?: ReactNode;
	trailIcon?: ReactNode;
	body: string;
	badge?: ReactNode;
}) => {
	return (
		<DropdownMenuItemStyles>
			<DropdownMenuItemInner>
				<Flexbox $gap={4} style={{ flexGrow: 1 }} $align={"center"}>
					{leadIcon}
					<DropdownMenuItemText>{body}</DropdownMenuItemText>
				</Flexbox>
				<Flexbox $gap={8} $justify={"center"} $align={"center"}>
					{trailIcon}
					{badge}
				</Flexbox>
			</DropdownMenuItemInner>
		</DropdownMenuItemStyles>
	);
};

export default DropdownMenuItem;
