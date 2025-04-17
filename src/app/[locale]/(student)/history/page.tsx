import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import NewExamHistory from "@/Library/pages/NewExamHistory/NewExamHistory";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Locale }) => {
	const responseData = (await GetData("/exam-history/user")) as {
		data: {
			data: {
				data: {
					subExam: string;
					score: number;
					timeSpent: string;
					createdAt: string;
					subExamId: { nameEn: string; nameAr: string; examId: { nameEn: string; nameAr: string } };
				}[];
				lastPage: number;
			};
		};
	};

	const { data, error } = (await GetData(`/enroll/enroll`)) as {
		error: boolean;
		data: {
			data: {
				ActiveUntil: string;
				examId: {
					questionsCount: string;
					slug: string;
					nameAr: string;
					nameEn: string;
					descriptionEn: string;
					examsCount: string;
					image: string;
				};
			}[];
		};
	};
	// console.log(data.data, "data");
	// console.log(responseData?.data?.data?.data, "12346");
	return (
		<Suspense fallback={<PageSkeleton />}>
			{/*<ExamHistory*/}
			{/*	url={"/exam-history/user"}*/}
			{/*	lastPage={responseData?.data?.data?.lastPage}*/}
			{/*	// @ts-ignore*/}
			{/*	data={responseData?.data?.data?.data}*/}
			{/*	locale={params.locale}*/}
			{/*/>*/}

			<NewExamHistory
				locale={params.locale}
				dataRes={data?.data}
				res={responseData.data.data.data}
			/>
		</Suspense>
	);
};

export default Page;
