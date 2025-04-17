import React, { Suspense } from "react";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import AddDiscussionSubExam from "@/Library/pages/AddDiscussionSubExam/AddDiscussionSubExam";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: { subExamName: string } }) => {
	const res = (await GetData(`/subExam/slug/${params.subExamName}`)) as {
		data: { data: { id: string } };
	};

	return (
		<Suspense fallback={<PageSkeleton />}>
			<AddDiscussionSubExam SubExamId={res.data.data.id} />
		</Suspense>
	);
};

export default Page;
