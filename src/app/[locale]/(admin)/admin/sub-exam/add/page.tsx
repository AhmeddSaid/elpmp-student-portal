"use server";
import React from "react";
import { Locale } from "@/Global";
import AddSubExam from "@/Library/pages/AddSubExam/AddSubExam";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: Locale }) => {
	const tags = (await GetData("/tag")) as {
		data: {
			data: {
				nameEn: string;
				nativeName: string;
				id: string;
			}[];
		};
	};
	const exams = (await GetData("/exam")) as {
		data: { data: { nameEn: string; nameAr: string; id: string }[] };
	};
	return (
		<>
			<AddSubExam locale={params.locale} tags={tags.data.data} exams={exams.data.data} />
		</>
	);
};

export default Page;
