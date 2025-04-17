import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SettingNavbarShell } from "@/Library/Common/SettingNavbar/SettingNavbar.styles";
import Taps from "@/Library/Common/Taps/Taps";
import uuid from "@/Utils/uuid";

const SettingNavbar = ({
	SettingNavbarData,
}: {
	SettingNavbarData: { label: string; path: string }[];
}) => {
	const pathName = usePathname();
	return (
		<SettingNavbarShell as={"ul"}>
			{SettingNavbarData.map(item => (
				<li key={uuid()}>
					<Link href={item.path}>
						<Taps
							size={"small"}
							active={pathName === item.path}
							underline={pathName === item.path}
							label={item.label}
						/>
					</Link>
				</li>
			))}
			{/*<li>*/}
			{/*	<Link href={""}>*/}
			{/*		<Taps size={"small"} underline active label={"Profile"} />*/}
			{/*	</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
			{/*	<Link href={""}>*/}
			{/*		<Taps size={"small"} label={"Password"} />*/}
			{/*	</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
			{/*	<Link href={""}>*/}
			{/*		<Taps size={"small"} label={"Subscription"} />*/}
			{/*	</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
			{/*	<Link href={""}>*/}
			{/*		<Taps size={"small"} label={"Invoices"} />*/}
			{/*	</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
			{/*	<Link href={""}>*/}
			{/*		<Taps size={"small"} label={"Billing address"} />*/}
			{/*	</Link>*/}
			{/*</li>*/}
		</SettingNavbarShell>
	);
};

export default SettingNavbar;
