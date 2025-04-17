"use server";
import Link from "next/link";
import React from "react";
import Button from "@/Library/Common/Button/Button";
import { Col, Flexbox, Row } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import { GetData } from "@/Utils/AxiosFetch";
import uuid from "@/Utils/uuid";
// import AddQuestion from "@/Library/pages/AddQuestion/AddQuestion";

const Page = async () => {
	const { data } = (await GetData("/question")) as {
		data: {
			data: {
				id: string;
				questionEn: string;
				questionAr: string;
				createdAt: Date;
				createdBy: string;
				updatedBy: string;
				updateAt: Date;
				correctAnswersCount: number;
				type: string;
				isDeleted: boolean;
			}[];
		};
	};
	return (
		<>
			<Flexbox $justify={"space-between"}>
				<PageHeader title={"Questions"} subTitle={"subTitle"} />

				<Link href={"/admin/exams/question/add"}>
					<Button body={"Add"} />
				</Link>
			</Flexbox>
			<Row>
				{data.data.map(item => (
					<Col key={uuid()} $md={6}>
						<div
							style={{
								borderRadius: "10px",
								border: "2px solid black",
								padding: "10px",
								marginTop: "24px",
							}}
						>
							<p>{`id:${item.id}`}</p>
							<p>{`questionEn : ${item.questionEn}`}</p>
							<p>{`questionAr : ${item.questionAr}`}</p>
							<p>{`createdAt : ${item.createdAt}`}</p>
							<p>{`createdBy : ${item.createdBy}`}</p>
							<p>{`updatedBy : ${item.updatedBy}`}</p>
							<p>{`updateAt : ${item.updateAt}`}</p>
							<p>{`correctAnswersCount : ${item.correctAnswersCount}`}</p>
							<p>{`type : ${item.type}`}</p>
							<p>{`isDeleted : ${item.isDeleted}`}</p>
						</div>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Page;
