"use client";
import React, { ReactNode, useState } from "react";
import {
	DropdownBody,
	DropdownCustomStyles,
	DropdownMenu,
} from "@/Library/Common/Dropdown/Dropdown.styles";
import DropdownMenuItem from "@/Library/Common/Dropdown/DropdownMenuItem/DropdownMenuItem";
import ArrowDown from "@/Library/Common/Icongraphy/ArrowDown/ArrowDown";

const Dropdown = ({
	body,
	DropdownItems,
}: {
	body: string;
	DropdownItems: { badge?: ReactNode; trailIcon?: ReactNode; leadIcon?: ReactNode; body: string }[];
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<DropdownCustomStyles
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				open={isOpen}
			>
				<DropdownBody>{body}</DropdownBody>
				<ArrowDown />
			</DropdownCustomStyles>

			<DropdownMenu open={isOpen}>
				{DropdownItems.map(item => {
					return (
						<>
							<DropdownMenuItem
								body={item.body}
								badge={item.badge}
								trailIcon={item.trailIcon}
								leadIcon={item.leadIcon}
							/>
						</>
					);
				})}
			</DropdownMenu>
		</>
	);
};

export default Dropdown;
