import React, { ReactNode } from "react";

import CrossIcon from "@/Library/Common/Icongraphy/CrossIcon/CrossIcon";
import {
	NotificationCaptoin,
	NotificationContanier,
	NotificationShell,
	NotificationTittle,
} from "@/Library/Common/Notification/Notification.styles";

const Notifications = ({
	tittle,
	caption,
	icon,
	children,
	className,
	id,
	type,
	crossIcon,
}: {
	tittle: string;
	caption: string;
	icon?: ReactNode;
	children?: ReactNode;
	className?: string;
	id?: string;
	type?:
		| "error"
		| "success"
		| "information"
		| "white"
		| "Darkerror"
		| "Darksuccess"
		| "Darkinformation"
		| "Darkwhite";
	crossIcon?: boolean;
}) => {
	return (
		<>
			<NotificationContanier type={type} className={className} id={id}>
				{icon}

				<NotificationShell>
					<NotificationTittle type={type}>{tittle}</NotificationTittle>
					<NotificationCaptoin type={type}>{caption}</NotificationCaptoin>
					{children}
				</NotificationShell>

				{crossIcon && <CrossIcon />}
			</NotificationContanier>
		</>
	);
};

export default Notifications;
