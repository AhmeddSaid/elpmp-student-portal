"use client";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Locale } from "@/Global";
import { LayoutShell, SettingsSection } from "@/Library/Common/Grids/Grids";
import SettingNavbar from "@/Library/Common/SettingNavbar/SettingNavbar";
import NavBar from "@/Library/pages/NavBar/NavBar";
import MainSideNav from "@/Library/pages/SideBar/MainSideNav";
import SettingsSideNav from "@/Library/pages/SideBar/SettingsSideNav";
import { MainRootState } from "@/lib/Store";

const SettingNavbarData = [
	{
		label: "Profile",
		path: "/settings",
	},
	{
		label: "Password",
		path: "/settings/password",
	},
	{
		label: "Subscription",
		path: "/settings/subscription",
	},
	{
		label: "Invoices",
		path: "/settings/invoices",
	},
	{
		label: "Billing address",
		path: "/settings/address",
	},
];
const Layout = ({ children, params }: { children: ReactNode; params: Locale }) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);

	return (
		<>
			<SettingsSideNav locale={params.locale} />
			<LayoutShell isOpen={isOpen}>
				<NavBar locale={params.locale} />
				<SettingNavbar SettingNavbarData={SettingNavbarData} />
				<MainSideNav locale={params.locale} />
				<SettingsSection>{children}</SettingsSection>
			</LayoutShell>
		</>
	);
};

export default Layout;
