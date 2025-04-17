"use client";
import React, { ReactNode } from "react";
import Error from "../Icongraphy/24/Error";
import Info from "../Icongraphy/24/Info";
import Success from "../Icongraphy/24/Success";
import Warning from "../Icongraphy/24/Warning";
import { CalloutProps } from "./CalloutProps";
import { CalloutShell, CalloutTitle } from "./CalloutStyles";

const Callout = ({ variant = "info", size, title }: CalloutProps) => {
	const Icons = ({
		variants,
	}: {
		variants: "info" | "warning" | "error" | "success";
	}): ReactNode => {
		let icon;
		switch (variants) {
			case "error":
				icon = <Error />;
				break;
			case "warning":
				icon = <Warning />;
				break;
			case "success":
				icon = <Success />;
				break;
			default:
				icon = <Info />;
				break;
		}

		return <>{icon}</>;
	};

	return (
		<>
			<CalloutShell variant={variant} size={size}>
				<Icons variants={variant} />
				<CalloutTitle variant={variant}>{title}</CalloutTitle>
			</CalloutShell>
		</>
	);
};

export default Callout;
