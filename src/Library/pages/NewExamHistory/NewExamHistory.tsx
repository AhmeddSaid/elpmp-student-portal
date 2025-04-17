"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ExamHistoryAr, ExamHistoryEn } from "../../../../messages/ExamHistory/ExamHistory";
import styles from "./../../Common/Grids/Spaces.module.css";
import Breadcrumb from "@/Library/Common/Breadcrumb/Breadcrumb";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import SmallChevronDown from "@/Library/Common/Icongraphy/SmallChevronDown/SmallChevronDown";
import Table from "@/Library/Common/Table/Table";
import TableCell from "@/Library/Common/Table/TableCell";
import ExamHistoryNavbar from "@/Library/pages/NewExamHistory/ExamHistoryNavbar";
import {
	Divider,
	ExamDetailsShell,
	TableHeader,
	TableShell,
	TargetState,
} from "@/Library/pages/NewExamHistory/NewExamHistory.styles";
import secondsToMinutes from "@/Utils/TimeConvert";
import formatDate from "@/Utils/formatDate";
import uuid from "@/Utils/uuid";

const NewExamHistory = ({
	res,
	dataRes,
	locale,
}: {
	res: {
		mode: string;
		score: number;
		timeSpent: number;
		EndedAt: string;
		reference: string;
		subExamId: { nameEn: string; nameAr: string };
	}[];
	dataRes: [];
	locale: string;
}) => {
	const [ActiveTap, setActiveTap] = useState(0);
	const t = locale === "en" ? ExamHistoryEn : ExamHistoryAr;
	const links = [
		{ name: "Exam History", link: "/history" },
		{ name: "Project Management Essentials", link: "/" },
	];
	const NumOfExam = [
		{ title: "No. of exams", number: "82" },
		{ title: "No. of exams", number: "82" },
		{ title: "No. of exams", number: "82" },
		{ title: "No. of exams", number: "82" },
		{ title: "No. of exams", number: "82" },
	];

	const HeaderTable = [
		{ name: t.tableHeader.Exam, center: false },
		{ name: t.tableHeader.Date, center: true },
		{ name: t.tableHeader.Mode, center: false },
		{ name: t.tableHeader.Duration, center: true },
		{
			name: t.tableHeader.Status,
			center: false,
		},
		{
			name: t.tableHeader.Score,
			center: true,
		},
	];

	const router = useRouter();

	return (
		<>
			<Flexbox $direction={"column"} $gap={48}>
				<Breadcrumb links={links} />
				<div>
					<ExamHistoryNavbar
						locale={locale}
						data={dataRes}
						ActiveTap={ActiveTap}
						setActiveTap={setActiveTap}
					/>
				</div>

				<Flexbox className={styles.marginBottom32}>
					{NumOfExam.map(item => (
						<>
							<ExamDetailsShell>
								<p className={"title"}>{item.title}</p>
								<p className={"number"}>{item.number}</p>
							</ExamDetailsShell>
						</>
					))}
				</Flexbox>
			</Flexbox>

			<TableShell className={styles.marginTop24}>
				<Divider />
				<TableHeader $justify={"space-between"} $align={"center"}>
					<Flexbox $align={"center"}>
						<Flexbox $gap={4} $align={"center"}>
							<p className={"NumberOfExams"}>{res.length}</p>
							<p className={"Exam"}>Exams</p>
						</Flexbox>

						<div className={"divider"} />

						<p className={"Exam"}>Filter exams</p>

						<Flexbox className={"ShowAll"}>
							<p>Show all</p>
							<SmallChevronDown />
						</Flexbox>
					</Flexbox>
					<Flexbox $align={"center"}>
						<p className={"Exam"}>Show</p>
						<Flexbox $align={"center"} className={"ShowAll"}>
							<p> 8</p>
							<SmallChevronDown />
						</Flexbox>
						<p className={`Exam ${styles.marginInlineStart8}`}>per page</p>
					</Flexbox>
				</TableHeader>

				<Table>
					<thead>
						<tr>
							{HeaderTable.map(item => (
								<TableCell center={item.center} Size={"sm"} key={uuid()} Type="Table-Head">
									{item.name}
								</TableCell>
							))}
						</tr>
					</thead>
					<tbody>
						{res.map(item => (
							<tr key={uuid()} onClick={() => router.push(`/history-details/${item.reference}`)}>
								<TableCell>
									<p className={"black"}>
										{locale === "en" ? item.subExamId.nameEn : item.subExamId.nameAr}{" "}
									</p>
								</TableCell>
								<TableCell center>
									<p>{formatDate(item.EndedAt)}</p>
								</TableCell>
								<TableCell>
									<p>{item.mode.toLowerCase()} </p>
								</TableCell>{" "}
								<TableCell center>
									<p>{secondsToMinutes(item.timeSpent)} </p>
								</TableCell>
								<TableCell>
									<Flexbox $align={"center"} $gap={4}>
										<TargetState
											state={
												item.score >= 90
													? "Above target"
													: item.score >= 75
														? "Target"
														: item.score >= 60
															? "Needs-improvement"
															: "Needs-improvement"
											}
										/>
										<p>
											{item.score >= 90
												? t.scoreStatus.aboveTarget
												: item.score >= 75
													? t.scoreStatus.target
													: item.score >= 60
														? t.scoreStatus.BelowTarget
														: t.scoreStatus.needsImprovement}
										</p>
									</Flexbox>
								</TableCell>
								<TableCell center>
									<p>{item.score}/100</p>
								</TableCell>
							</tr>
						))}
					</tbody>
				</Table>
			</TableShell>
		</>
	);
};

export default NewExamHistory;
