"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { ExamHistoryAr, ExamHistoryEn } from "../../../../messages/ExamHistory/ExamHistory";
import Button from "@/Library/Common/Button/Button";
import { Flexbox } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import ExamIcon from "@/Library/Common/Icongraphy/ExamIcon/ExamIcon";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import Tags from "@/Library/Common/Tags/Tags";
import { ExamHistoryShell } from "@/Library/pages/ExamHistory/ExamHistory.styles";
import {
	DivStyles,
	ExamhistoryDate,
	ExamHistoryInfo,
	ExamOption,
	ExamScore,
	FinishedExam,
} from "@/Library/pages/ExamPage/ExamPage.styles";
import DateFormatter from "@/Utils/DateFormatter";
import uuid from "@/Utils/uuid";
import { ExamHistoryAction } from "@/app/[locale]/(student)/history/action";

export const dynamic = "force-dynamic";

type ExamData = {
	subExam: string;
	score: number;
	timeSpent: string;
	createdAt: string;
	subExamId: {
		nameEn: string;
		nameAr: string;
		examId: { nameEn: string; nameAr: string };
	};
	reference: string;
};

interface ExamHistoryProps {
	url: string;
	locale: string;
	data: ExamData[];
	lastPage: number;
	links?: string[];
}

const ExamHistory = ({
	locale,
	data = [],
	lastPage,
	url,
	links = ["/history", "/history/passed", "/history/failed"],
}: ExamHistoryProps) => {
	const path = usePathname();
	const t = useMemo(() => (locale === "en" ? ExamHistoryEn : ExamHistoryAr), [locale]);
	const [exams, setExams] = useState<ExamData[]>(data);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [loading, setLoading] = useState(false);

	const fetchNextPageOfExams = async () => {
		try {
			setLoading(true);
			const newExams = await ExamHistoryAction(url, currentPage + 1);
			setCurrentPage(prev => prev + 1);
			setExams(prev => [...prev, ...newExams.data]);
		} catch {
			toast.error("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	const router = useRouter();

	// @ts-ignore
	const renderExamItem = ({
		subExamId: { nameEn, examId },
		score,
		// timeSpent,
		createdAt,
		reference,
	}: ExamData) => (
		// @ts-ignore
		<FinishedExam key={uuid()} onClick={() => router.push(`/history-details/${reference}`)}>
			<Flexbox className={"imageCaption"} $gap={15}>
				<div>
					<Flexbox>
						<ExamScore>{nameEn}</ExamScore>
					</Flexbox>
					<Flexbox className={"caption"} $gap={20}>
						<Flexbox $align={"center"} $gap={10}>
							<ExamIcon />
							<DivStyles>{examId.nameEn}</DivStyles>
						</Flexbox>
						<Flexbox $align={"center"} $gap={10}>
							<svg
								width="24px"
								height="24px"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#000000"
							>
								<path
									d="M12 11.5V16.5"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M12 7.51L12.01 7.49889"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
							<DivStyles>
								{score >= 90
									? "Above target"
									: score >= 75
										? "Target"
										: score >= 60
											? "Below target"
											: "Needs Improvement"}
							</DivStyles>
						</Flexbox>
						{/*<Flexbox $align={"center"}>*/}
						{/*	<TestIcon />*/}
						{/*	<DivStyles>{timeSpent}</DivStyles>*/}
						{/*</Flexbox>*/}
						<Flexbox $align={"center"} $gap={10}>
							<svg
								width="24px"
								height="24px"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#000000"
							>
								<path
									d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M7 2V6"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
									stroke="#000000"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
							<DivStyles>{DateFormatter(createdAt, locale)}</DivStyles>
						</Flexbox>
					</Flexbox>
				</div>
			</Flexbox>
			<ExamHistoryInfo>
				<Tags
					fcolor={score >= 75 ? "success" : "error"}
					bgcolor={score >= 75 ? "success" : "error"}
					tagtittle={score >= 75 ? t.passTag : t.failedTag}
					size={"small"}
				/>
				<ExamhistoryDate>{`${score}%`}</ExamhistoryDate>
			</ExamHistoryInfo>
		</FinishedExam>
	);

	return (
		<ExamHistoryShell>
			<div>
				<PageHeader subTitle={t.subHeader} title={t.header} />
				<Flexbox $gap={16} className={styles.paddingTop16}>
					<Link href={links[0]}>
						<ExamOption active={path === links[0]}>{t.taps.tap1}</ExamOption>
					</Link>
					<Link href={links[1]}>
						<ExamOption active={path === links[1]}>{t.taps.tap2}</ExamOption>
					</Link>
					<Link href={links[2]}>
						<ExamOption active={path === links[2]}>{t.taps.tap3}</ExamOption>
					</Link>
				</Flexbox>
			</div>
			<div>{exams.map(renderExamItem)}</div>
			{!loading && !(currentPage >= lastPage) && (
				<Flexbox className={styles.paddingTop32} $justify={"center"}>
					<Button loading={loading} onclick={fetchNextPageOfExams} body={t.button} />
				</Flexbox>
			)}
		</ExamHistoryShell>
	);
};

export default ExamHistory;
