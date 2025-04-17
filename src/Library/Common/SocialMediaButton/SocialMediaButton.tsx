import React from "react";
import FacebookMdColorIcon from "@/Library/Common/Icongraphy/FacebookIcon/FacebookMdColorIcon";
import FacebookMdIcon from "@/Library/Common/Icongraphy/FacebookIcon/FacebookMdIcon";
import FacebookSmColorIcon from "@/Library/Common/Icongraphy/FacebookIcon/FacebookSmColorIcon";
import FacebookSmIcon from "@/Library/Common/Icongraphy/FacebookIcon/FacebookSmIcon";
import GoogleIconMd from "@/Library/Common/Icongraphy/GoogleIcon/GoogleIconMd";
import GoogleIconSm from "@/Library/Common/Icongraphy/GoogleIcon/GoogleIconSm";
import GoogleWhiteMd from "@/Library/Common/Icongraphy/GoogleIcon/GoogleWhiteMd";
import GoogleWhiteSm from "@/Library/Common/Icongraphy/GoogleIcon/GoogleWhiteSm";
import {
	SocialMediaButtonBodyStyles,
	SocialMediaButtonStyles,
} from "@/Library/Common/SocialMediaButton/SocialMediaButton.styles";

const SocialMediaButton = ({
	disable = false,
	size,
	variant,
	buttonBody,
	type,
}: {
	disable?: boolean;
	size?: "md" | "sm";
	variant?: "primary" | "secondary";
	buttonBody?: string;
	type: "facebook" | "google";
}) => {
	buttonBody = buttonBody || `Continue with ${type === "facebook" ? "facebook" : "google"}`;
	return (
		<>
			<SocialMediaButtonStyles
				type={type}
				disabled={disable}
				disable={disable}
				size={size}
				variant={variant}
			>
				{type === "facebook" ? (
					variant === "secondary" ? (
						size === "sm" ? (
							<FacebookSmColorIcon />
						) : (
							<FacebookMdColorIcon />
						)
					) : size === "sm" ? (
						<FacebookSmIcon />
					) : (
						<FacebookMdIcon />
					)
				) : undefined}

				{type === "google" ? (
					variant === "secondary" ? (
						size === "sm" ? (
							<GoogleIconSm />
						) : (
							<GoogleIconMd />
						)
					) : size === "sm" ? (
						<GoogleWhiteSm />
					) : (
						<GoogleWhiteMd />
					)
				) : undefined}

				<SocialMediaButtonBodyStyles size={size} variant={variant}>
					{buttonBody}
				</SocialMediaButtonBodyStyles>
			</SocialMediaButtonStyles>
		</>
	);
};

export default SocialMediaButton;
