"use server";
import React, { ReactNode } from "react";
import { Locale } from "@/Global";
import ExamLayout from "@/Library/Common/Layouts/ExamLayout";
import { ExamItem } from "@/Library/pages/SideBar/ExamDetailsSideNav";
import { GetData } from "@/Utils/AxiosFetch";

const Layout = async ({
	children,
	params,
}: {
	children: ReactNode;
	params: { examName: string } & Locale;
}) => {
	const { data } = (await GetData(`/exam/slug/${params.examName}`)) as {
		data: { data: { SubExam: ExamItem[] } };
	};

	return (
		<ExamLayout data={data?.data?.SubExam} params={params}>
			{children}
		</ExamLayout>
	);
};

export default Layout;
