import Link from "next/link";
import React from "react";
import Button from "@/Library/Common/Button/Button";
import { Col, Row } from "@/Library/Common/Grids/Grids";
// import { GetData } from "@/Utils/AxiosFetch";

const Page = async () => {
	// const subExams = (await GetData("/subExam")) as {
	// 	data: { data: { id: string; nameEn: string; descriptionEn: string; subExamType: string }[] };
	// };
	return (
		<>
			<Row $justify="space-between">
				<Col $md={3}>
					<h1>sub exam page</h1>
				</Col>

				<Col $md={1}>
					<Link href={"/admin/sub-exam/add"}>
						<Button body={"ADD"} />
					</Link>
				</Col>
			</Row>
		</>
	);
};

export default Page;
