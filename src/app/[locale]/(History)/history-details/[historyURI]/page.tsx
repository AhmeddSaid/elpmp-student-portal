import { redirect } from "next/navigation";
import React from "react";
import HistoryPage from "@/Library/pages/History/HistoryPage";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({
	params,
}: {
	params: {
		historyURI: string;
	};
}) => {
	const { historyURI } = params;
	const data = await GetData(`/exam-history-details/${historyURI}`);
	if (data.error) {
		redirect("/404");
	}
	return (
		<>
			{/*@ts-ignore*/}
			<HistoryPage data={data} examName={data.data.data.historyCheck.subExamId.nameEn} />
		</>
	);
};

export default Page;
