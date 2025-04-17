import React from "react";
import AddQuestionToExam from "@/Library/pages/AddQuestionToExam/AddQuestionToExam";
import { GetData, GetDataResponse } from "@/Utils/AxiosFetch";

const Page = async () => {
	const questions: GetDataResponse<{ data: { questionEn: string; id: string }[] }> =
		await GetData("/question");

	const exams: GetDataResponse<{ data: { nameEn: string; id: string }[] }> = await GetData("/exam");

	return (
		<>
			<AddQuestionToExam questions={questions?.data?.data} exams={exams?.data?.data} />
		</>
	);
};

export default Page;
