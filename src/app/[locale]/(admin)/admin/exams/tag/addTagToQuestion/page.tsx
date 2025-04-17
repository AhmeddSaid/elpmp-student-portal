import React from "react";
import AddTagToQuestion from "@/Library/pages/AddTagToQuestion/AddTagToQuestion";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async () => {
	const questions = (await GetData("/question")) as {
		data: { data: { questionEn: string; id: string }[] };
	};

	const tags = (await GetData("/tag")) as { data: { data: { nameEn: string; id: string }[] } };
	return <AddTagToQuestion questions={questions.data.data} tags={tags.data.data} />;
};

export default Page;
