import React, { Suspense } from "react";
import { Locale } from "@/Global";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import ExamHistory from "@/Library/pages/ExamHistory/ExamHistory";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { examName: string } & Locale }) => {
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
	const baseURI = `/exam/${params.examName}/history`;
	return (
		<Suspense fallback={<PageSkeleton />}>
			<ExamHistory
				url={"/exam-history/user"}
				lastPage={responseData?.data?.data?.lastPage}
				// @ts-ignore
				data={responseData?.data?.data?.data}
				locale={params.locale}
				links={[`${baseURI}`, `${baseURI}/passed`, `${baseURI}/failed`]}
			/>
		</Suspense>
	);
};

export default Page;
