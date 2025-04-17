"use server";
import Link from "next/link";
import React from "react";
import { AdminExamsAr, AdminExamsEn } from "../../../../../../messages/AdminExams/AdminExams";
import { Locale } from "@/Global";
import Button from "@/Library/Common/Button/Button";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import { GetData } from "@/Utils/AxiosFetch";

const Page = async ({ params }: { params: Locale }) => {
	const { data, error } = (await GetData("/exam")) as {
		data: {
			data: {
				id: string;
				nameEn: string;
				descriptionEn: string;
				image: string;
			}[];
		};
		error: boolean;
	};
	const t = params.locale === "en" ? AdminExamsEn : AdminExamsAr;
	if (error) {
		return <ErrorFetchingData />;
	}

	return (
		<>
			{data.data.length <= 0 && (
				<>
					<p>No exams found</p>
					<Link href={"/admin/exams/add"}>
						<Button body={"Add"} />
					</Link>
				</>
			)}

			{data.data.length > 0 && (
				<>
					<Flexbox $justify={"space-between"}>
						<PageHeader title={t.title} subTitle={t.subTitle} />
						<Link href={"/admin/exams/add"}>
							<Button body={t.button} />
						</Link>
					</Flexbox>
				</>
			)}
		</>
	);
};

export default Page;
