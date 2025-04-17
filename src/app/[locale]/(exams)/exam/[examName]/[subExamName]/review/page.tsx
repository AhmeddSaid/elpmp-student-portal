import React, { Suspense } from "react";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import SubExamReview from "@/Library/pages/SubExamReview/SubExamReview";
import { GetData } from "@/Utils/AxiosFetch";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { subExamName: string } }) => {
	const res = (await GetData(`/subExam/slug/${params.subExamName}`)) as {
		data: {
			data: {
				data: { id: string };
			};
		};
	};

	// console.log(res.data.data.data.id, "fgfgfgfgfgg");
	return (
		<Suspense fallback={<PageSkeleton />}>
			<SubExamReview subExamID={res.data.data.data.id} />
		</Suspense>
	);
};

export default Page;
