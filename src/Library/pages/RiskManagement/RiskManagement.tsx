"use client";
import React, { useState } from "react";
import { MyLearningAr, MyLearningEn } from "../../../../messages/MyLearning/MyLearning";
import Breadcrumb from "@/Library/Common/Breadcrumb/Breadcrumb";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import ArrowUpRight from "@/Library/Common/Icongraphy/ArrowUpRight/ArrowUpRight";
import MyLearningNavbar from "@/Library/Common/MyLearningNavbar/MyLearningNavbar";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import {
	MyLearningHeader,
	OpenExamButton,
} from "@/Library/pages/RiskManagement/RiskManagement.styles";
import uuid from "@/Utils/uuid";

export interface ExamItem {
	nameEn: string;
	SubExam: {
		subExamType: string;
		subTitles: { nameEn: string; slug: string }[];
		order?: number;
	};
}

const RiskManagement = ({
	data,
	examName,
	locale,
}: {
	data: {
		nameEn: string;
		SubExam: ExamItem[];
	};
	examName: string;
	locale: string;
}) => {
	const t = locale === "en" ? MyLearningEn : MyLearningAr;

	const HeaderTable = [t.tableHeader.Exam, t.tableHeader.Duration, t.tableHeader.noOfQuestions, ""];
	// console.log(data, "data");
	const groupedBySubExamType = data?.SubExam?.reduce(
		(acc, item) => {
			if (Object.keys(item).length) {
				const key = item.subExamType;
				if (!acc[key]) {
					acc[key] = [];
				}
				acc[key].push(item);
			}
			return acc;
		},
		{} as Record<string, ExamItem[]>,
	);

	Object.values(groupedBySubExamType).forEach(group => {
		group.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
	});
	const links = [
		{ name: "My Learning", link: "/" },
		{ name: data.nameEn, link: "/" },
	];
	const [ActiveTap, setActiveTap] = useState(0);

	return (
		<>
			<Flexbox $direction={"column"} $gap={40}>
				<Breadcrumb links={links} />
				<Flexbox $align={"center"} $justify={"space-between"}>
					<MyLearningHeader>{data.nameEn}</MyLearningHeader>
					<Button bgcolor={"gost"} body={t.ViewButton} size={"medium"} />
				</Flexbox>
				<MyLearningNavbar
					data={groupedBySubExamType}
					ActiveTap={ActiveTap}
					setActiveTap={setActiveTap}
				/>

				{/*<Flexbox $justify={"space-between"}>*/}
				{/*	<p>Mastering Project Management: Strategies for Success</p>*/}
				{/*	<Button body={"View your exam history"} size={"medium"} />*/}
				{/*</Flexbox>*/}
			</Flexbox>
			<Table>
				<thead>
					<tr>
						{HeaderTable.map((item: string) => (
							<TableCell Size={"sm"} key={uuid()} Type="Table-Head">
								{item}
							</TableCell>
						))}
					</tr>
				</thead>
				{ActiveTap === 0 && (
					<>
						<tbody>
							{groupedBySubExamType.DOMAIN.map(item => (
								<tr className={"width50"} key={uuid()}>
									<TableCell width={60}>
										<p className={"black"}>{item.nameEn} </p>
									</TableCell>
									<TableCell>
										<p>{item.durationPerQuestion} </p>
									</TableCell>
									<TableCell>
										<p></p>
									</TableCell>{" "}
									<TableCell>
										<div className={"buttonShell"}>
											<OpenExamButton
												className={"startExamButton"}
												href={`/instructions/${item.slug}`}
											>
												<p>{t.StartExamButton}</p>
												<ArrowUpRight />
											</OpenExamButton>
										</div>
									</TableCell>
								</tr>
							))}
						</tbody>
					</>
				)}{" "}
				{ActiveTap === 1 && (
					<>
						<tbody>
							{groupedBySubExamType.KNOWLEDGEAREA.map(item => (
								<tr className={"width50"} key={uuid()}>
									<TableCell width={60}>
										<p className={"black"}>{item.nameEn} </p>
									</TableCell>
									<TableCell>
										<p>{item.durationPerQuestion} </p>
									</TableCell>

									<TableCell>
										<p></p>
									</TableCell>
									<TableCell>
										<div className={"buttonShell"}>
											<OpenExamButton
												className={"startExamButton"}
												href={`/instructions/${item.slug}`}
											>
												<p>{t.StartExamButton}</p>
												<ArrowUpRight />
											</OpenExamButton>
										</div>
									</TableCell>
								</tr>
							))}
						</tbody>
					</>
				)}{" "}
				{ActiveTap === 2 && (
					<>
						<tbody>
							{groupedBySubExamType.FULLEXAMS.map(item => (
								<tr className={"width50"} key={uuid()}>
									<TableCell width={60}>
										<p className={"black"}>{item.nameEn} </p>
									</TableCell>
									<TableCell>
										<p>{item.durationPerQuestion} </p>
									</TableCell>

									<TableCell>
										<p></p>
									</TableCell>
									<TableCell>
										<div className={"buttonShell"}>
											<OpenExamButton
												className={"startExamButton"}
												href={`/instructions/${item.slug}`}
											>
												<p>{t.StartExamButton}</p>
												<ArrowUpRight />
											</OpenExamButton>
										</div>
									</TableCell>
								</tr>
							))}
						</tbody>
					</>
				)}{" "}
				{ActiveTap === 3 && (
					<>
						<tbody>
							{groupedBySubExamType?.OTHER?.map(item => (
								<tr className={"width50"} key={uuid()}>
									<TableCell width={60}>
										<p className={"black"}>{item?.nameEn} </p>
									</TableCell>
									<TableCell>
										<p>{item.durationPerQuestion} </p>
									</TableCell>

									<TableCell>
										<p></p>
									</TableCell>
									<TableCell>
										<div className={"buttonShell"}>
											<OpenExamButton
												className={"startExamButton"}
												href={`/instructions/${item.slug}`}
											>
												<p>{t.StartExamButton}</p>
												<ArrowUpRight />
											</OpenExamButton>
										</div>
									</TableCell>
								</tr>
							))}
						</tbody>
					</>
				)}
			</Table>
		</>
	);
};

export default RiskManagement;
