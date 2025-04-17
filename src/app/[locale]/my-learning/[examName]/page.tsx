import React from "react";
import RiskManagement from "@/Library/pages/RiskManagement/RiskManagement";
import { ExamItem } from "@/Library/pages/SideBar/ExamDetailsSideNav";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { examName: string } }) => {
	const { data } = (await GetData(`/exam/slug/${params.examName}`)) as {
		data: {
			data: {
				nameEn: string;
				SubExam: ExamItem[];
			};
		};
	};

	return (
		<div>
			<RiskManagement examName={params.examName} data={data?.data} />
		</div>
	);
};

export default Page;
