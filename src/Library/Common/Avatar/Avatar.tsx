import Image from "next/image";
import React, { ReactNode } from "react";
import {
	AvatarCustomStyles,
	BottomBadge,
	InnerPra,
	TopBadge,
} from "@/Library/Common/Avatar/Avatar.styles";
import UserIconMd from "@/Library/Common/Icongraphy/UserIcon/UserIconMd";
import UserIconSm from "@/Library/Common/Icongraphy/UserIcon/UserIconSm";
import UserIconXs from "@/Library/Common/Icongraphy/UserIcon/UserIconXs";

const Avatar = ({
	Size,
	AvatarType = "Letter",
	Name,
	Img = false,
	ImgSrc,
	Icon,
	count,
	bottomBadge = false,
}: {
	Size: "md" | "sm" | "xs" | "lg";
	AvatarType?: "Icon" | "Image" | "Letter";
	Name?: string;
	Img?: boolean;
	ImgSrc?: string;
	Icon?: ReactNode;
	count?: number;
	bottomBadge?: boolean;
}) => {
	const getFirstLetter = (name: string) => {
		return name.charAt(0).toUpperCase();
	};

	return (
		<AvatarCustomStyles $Size={Size}>
			{count && (
				<TopBadge $Size={Size}>
					<p>{count}</p>
				</TopBadge>
			)}
			{Img && ImgSrc ? (
				<Image src={ImgSrc} alt={""} width={48} height={48} />
			) : AvatarType === "Letter" && Name ? (
				<InnerPra $Size={Size}>{getFirstLetter(Name)}</InnerPra>
			) : Icon && Size === "md" ? (
				<UserIconMd />
			) : Icon && Size === "sm" ? (
				<UserIconSm />
			) : Icon && Size === "xs" ? (
				<UserIconXs />
			) : (
				<UserIconMd />
			)}

			{bottomBadge && <BottomBadge $Size={Size} />}
		</AvatarCustomStyles>
	);
};

export default Avatar;
