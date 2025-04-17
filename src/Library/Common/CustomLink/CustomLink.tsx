import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { CustomLinkLabel, CustomLinkStyles } from "@/Library/Common/CustomLink/CustomLink.styles";
import { MainRootState } from "@/lib/Store";

const CustomLink = ({
	type = "primary",
	size = "md",
	href,
	startIcon,
	tailingIcon,
	Disabled = false,
	Label,
	className,
	id,
}: {
	href: string;
	type?: "primary" | "secondary";
	size?: "md" | "sm";
	startIcon?: ReactNode;
	tailingIcon?: ReactNode;
	Disabled?: boolean;
	Label: string;
	className?: string;
	id?: string;
}) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);

	return (
		<CustomLinkStyles
			id={id}
			className={className}
			disabled={Disabled}
			size={size}
			type={type}
			href={href}
		>
			{startIcon}

			{isOpen && (
				<CustomLinkLabel disabled={Disabled} size={size} type={type}>
					{Label}
				</CustomLinkLabel>
			)}

			{tailingIcon}
		</CustomLinkStyles>
	);
};

export default CustomLink;
