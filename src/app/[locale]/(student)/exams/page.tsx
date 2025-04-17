import React, { Suspense } from "react";
import { ExamsAr, ExamsEn } from "../../../../../messages/Exams/Exams";
import styles from "./../../../../Library/Common/Grids/Spaces.module.css";
import { Locale } from "@/Global";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import ExamCard from "@/Library/Common/ExamCard/ExamCard";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import { GetData } from "@/Utils/AxiosFetch";
import uuid from "@/Utils/uuid";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: Locale }) => {
	const { data, error } = (await GetData(`/enroll/enroll`)) as {
		error: boolean;
		data: {
			data: {
				ActiveUntil: string;
				examId: {
					questionsCount: string;
					slug: string;
					nameAr: string;
					nameEn: string;
					descriptionEn: string;
					examsCount: string;
					image: string;
				};
			}[];
		};
	};

	if (error) {
		return <ErrorFetchingData />;
	}
	const t = params.locale === "en" ? ExamsEn : ExamsAr;
	return (
		<Suspense fallback={<PageSkeleton />}>
			<Row>
				<PageHeader num={data.data.length} subTitle={t.subTitle} title={"My Exams"} />
				{data.data.map(item => (
					<>
						<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>
							<ExamCard
								purchase={false}
								state={"active"}
								question={item.examId.questionsCount}
								type={"course"}
								key={uuid()}
								cardImg={`/dist/exams/${item.examId.image}`}
								HREF={`/exam/${item.examId.slug}/history`}
								title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}
								description={item.examId.descriptionEn}
								level={item.examId.examsCount}
								ActiveUntil={item.ActiveUntil}
								locale={params.locale}
							/>
						</Col>
					</>
				))}
			</Row>
			{/*<Row className={`${styles.marginTop24} ${styles.marginBottom24}`}>*/}
			{/*	<PageHeader num={"3"} subTitle={t.subTitle} title={"My Exams"} />*/}
			{/*	{data.data.map(item => (*/}
			{/*		<>*/}
			{/*			<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*				<ExamCard*/}
			{/*					purchase={false}*/}
			{/*					state={"active"}*/}
			{/*					question={item.examId.questionsCount}*/}
			{/*					type={"exam"}*/}
			{/*					key={uuid()}*/}
			{/*					cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*					HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*					title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*					description={item.examId.descriptionEn}*/}
			{/*					level={item.examId.examsCount}*/}
			{/*					ActiveUntil={item.ActiveUntil}*/}
			{/*					locale={params.locale}*/}
			{/*				/>*/}
			{/*			</Col>{" "}*/}
			{/*			<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*				<ExamCard*/}
			{/*					purchase={false}*/}
			{/*					state={"expired"}*/}
			{/*					question={item.examId.questionsCount}*/}
			{/*					type={"exam"}*/}
			{/*					key={uuid()}*/}
			{/*					cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*					HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*					title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*					description={item.examId.descriptionEn}*/}
			{/*					level={item.examId.examsCount}*/}
			{/*					ActiveUntil={item.ActiveUntil}*/}
			{/*					locale={params.locale}*/}
			{/*				/>*/}
			{/*			</Col>{" "}*/}
			{/*			<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*				<ExamCard*/}
			{/*					purchase={false}*/}
			{/*					state={"in-active"}*/}
			{/*					question={item.examId.questionsCount}*/}
			{/*					type={"exam"}*/}
			{/*					key={uuid()}*/}
			{/*					cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*					HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*					title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*					description={item.examId.descriptionEn}*/}
			{/*					level={item.examId.examsCount}*/}
			{/*					ActiveUntil={item.ActiveUntil}*/}
			{/*					locale={params.locale}*/}
			{/*				/>*/}
			{/*			</Col>{" "}*/}
			{/*			<Col className={styles.marginTop12} $sm={6} $md={6} $lg={4} $xl={4} key={uuid()}>*/}
			{/*				<ExamCard*/}
			{/*					purchase={false}*/}
			{/*					state={"re-activate"}*/}
			{/*					question={item.examId.questionsCount}*/}
			{/*					type={"exam"}*/}
			{/*					key={uuid()}*/}
			{/*					cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*					HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*					title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*					description={item.examId.descriptionEn}*/}
			{/*					level={item.examId.examsCount}*/}
			{/*					ActiveUntil={item.ActiveUntil}*/}
			{/*					locale={params.locale}*/}
			{/*				/>*/}
			{/*			</Col>*/}
			{/*		</>*/}
			{/*	))}*/}
			{/*</Row>*/}
			{/*<HorizontalDivider />*/}

			{/*<div>*/}
			{/*	<WhatNextTitle>What to learn next</WhatNextTitle>*/}

			{/*	<Row className={styles.marginTop24}>*/}
			{/*		<PageHeader num={"3"} subTitle={t.subTitle} title={"Courses"} />*/}
			{/*		{data.data.map(item => (*/}
			{/*			<>*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"active"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"course"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"expired"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"course"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"in-active"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"course"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>{" "}*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={4} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"re-activate"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"course"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>*/}
			{/*			</>*/}
			{/*		))}*/}
			{/*	</Row>*/}
			{/*	<Row className={`${styles.marginTop24} ${styles.marginBottom24}`}>*/}
			{/*		<PageHeader num={"3"} subTitle={t.subTitle} title={"Exams"} />*/}
			{/*		{data.data.map(item => (*/}
			{/*			<>*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"active"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"exam"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>{" "}*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"expired"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"exam"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>{" "}*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"in-active"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"exam"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>{" "}*/}
			{/*				<Col className={styles.marginTop12} $sm={6} $md={6} $lg={4} $xl={4} key={uuid()}>*/}
			{/*					<ExamCard*/}
			{/*						state={"re-activate"}*/}
			{/*						question={item.examId.questionsCount}*/}
			{/*						type={"exam"}*/}
			{/*						key={uuid()}*/}
			{/*						cardImg={`/dist/exams/${item.examId.image}`}*/}
			{/*						HREF={`/exam/${item.examId.slug}/history`}*/}
			{/*						title={params.locale === "ar" ? item.examId.nameAr : item.examId.nameEn}*/}
			{/*						description={item.examId.descriptionEn}*/}
			{/*						level={item.examId.examsCount}*/}
			{/*						ActiveUntil={item.ActiveUntil}*/}
			{/*						locale={params.locale}*/}
			{/*					/>*/}
			{/*				</Col>*/}
			{/*			</>*/}
			{/*		))}*/}
			{/*	</Row>*/}
			{/*</div>*/}
		</Suspense>
	);
};

export default Page;
