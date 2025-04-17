import React from "react";
import Instructions from "@/Library/pages/Instructions/Instructions";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: { slug: string } }) => {
	const res = (await GetData(`/subExam/slug/${params.slug}`)) as {
		data: {
			data: {
				data: {
					durationPerQuestion: number;
					tagId: { nameEn: string; nameAr: string; questionsCount: number };
				};
			};
		};
	};

	console.log(res.data.data.data, "123");
	// console.log(res.data.data.data.durationPerQuestion);
	// console.log(res.data.data.data.tagId.nameEn);
	// console.log(res.data.data.data.tagId.questionsCount);
	return <Instructions data={res.data.data} />;
};
export default Page;
