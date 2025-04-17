"use client";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Locale } from "@/Global";
import { LayoutShell, SmallSection } from "@/Library/Common/Grids/Grids";
import NavBar from "@/Library/pages/NavBar/NavBar";
import AdminSideNav from "@/Library/pages/SideBar/AdminSideNav";
import { MainRootState } from "@/lib/Store";

const Layout = ({ children, locale }: { children: ReactNode } & Locale) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);
	return (
		<>
			<AdminSideNav locale={locale} />
			<LayoutShell isOpen={isOpen}>
				<NavBar locale={locale} />
				<SmallSection>{children}</SmallSection>
			</LayoutShell>
		</>
	);
};

export default Layout;
