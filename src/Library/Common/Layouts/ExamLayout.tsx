"use client";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Locale } from "@/Global";
import { LayoutShell, SmallSection } from "@/Library/Common/Grids/Grids";
import NavBar from "@/Library/pages/NavBar/NavBar";
import ExamDetailsSideNav, { ExamItem } from "@/Library/pages/SideBar/ExamDetailsSideNav";
import { MainRootState } from "@/lib/Store";

const ExamLayout = ({
	children,
	params,
	data,
}: {
	children: ReactNode;
	params: { examName: string } & Locale;
	data: ExamItem[];
}) => {
	const { isOpen } = useSelector((state: MainRootState) => state.OpenAndCloseSideBar);
	return (
		<>
			<ExamDetailsSideNav exam={params.examName} data={data} locale={params.locale} />
			<LayoutShell isOpen={isOpen}>
				<NavBar locale={params.locale} />
				<SmallSection>{children}</SmallSection>
			</LayoutShell>
		</>
	);
};

export default ExamLayout;
