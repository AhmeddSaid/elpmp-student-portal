import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import ExamHistory from "@/Library/pages/ExamHistory/ExamHistory";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Locale }) => {
	const responseData = (await GetData("/exam-history/passed/failed")) as {
		data: {
			data: {
				data: {
					subExam: string;
					score: number;
					timeSpent: string;
					subExamId: {
						nameEn: string;
						nameAr: string;
						examId: { nameEn: string; nameAr: string };
					};
				}[];
			};
		};
	};

	return (
		<Suspense fallback={<PageSkeleton />}>
			<ExamHistory
				url={"/exam-history/passed/false"}
				// @ts-ignore
				data={responseData?.data?.data?.data.map(item => ({
					...item,
					createdAt: new Date().toISOString(),
				}))}
				locale={params.locale}
				lastPage={0}
			/>
		</Suspense>
	);
};

export default Page;
