"use client";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Locale } from "@/Global";
import { LayoutShell, SmallSection } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import NavBar from "@/Library/pages/NavBar/NavBar";
import MainSideNav from "@/Library/pages/SideBar/MainSideNav";
import { MainRootState } from "@/lib/Store";

const Layout = ({ children, params }: { children: ReactNode; params: Locale }) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);

	return (
		<>
			<MainSideNav locale={params.locale} />
			<LayoutShell isOpen={isOpen}>
				<NavBar locale={params.locale} />
				<SmallSection className={styles.marginTop80}>{children}</SmallSection>
			</LayoutShell>
		</>
	);
};

export default Layout;
