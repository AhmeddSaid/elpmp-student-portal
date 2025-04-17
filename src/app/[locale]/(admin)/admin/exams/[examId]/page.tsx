import React from "react";
import { Locale } from "@/Global";
import UpdateExams from "@/Library/pages/UpdateExams/UpdateExams";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: { examId: string; locale: Locale } }) => {
	const res1 = await GetData(`/exam/${params.examId}`);
	// @ts-ignore
	const data1 = res1.data.data;
	const res2 = await GetData(`/examsPricing/${params.examId}`);
	// @ts-ignore
	const data2 = res2.data.data;

	return <UpdateExams form1={data1} form2={data2} id={params.examId} locale={params.locale} />;
};

export default Page;
