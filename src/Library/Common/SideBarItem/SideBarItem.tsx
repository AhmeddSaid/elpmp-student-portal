import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import {
	SideBarItemBody,
	SideBarItemShell,
	Tooltip,
} from "@/Library/Common/SideBarItem/SideBarItem.styles";
import { MainRootState } from "@/lib/Store";

const SideBarItem = ({ title, icon, href }: { title: string; icon: ReactNode; href: string }) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);
	const active = usePathname() === href;
	const [isHovered, setIsHovered] = React.useState(false);
	return (
		<SideBarItemShell
			active={active.toString()}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			isOpen={isOpen}
			as={Link}
			href={href}
			$gap={10}
		>
			{icon}
			{!isOpen && !active && isHovered && <Tooltip className="tooltip">{title}</Tooltip>}
			<SideBarItemBody $isOpen={isOpen} $active={active}>
				{title}
			</SideBarItemBody>
		</SideBarItemShell>
	);
};

export default SideBarItem;
