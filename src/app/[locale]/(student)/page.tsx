// "use client";
import React, { Suspense } from "react";
import { Locale } from "@/Global";
import ErrorFetchingData from "@/Library/Common/ErrorFetching/ErrorFetchingData";
import ExamCard from "@/Library/Common/ExamCard/ExamCard";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import styles from "@/Library/Common/Grids/Spaces.module.css";
import PageHeader from "@/Library/Common/PageHeader/PageHeader";
import WelcomeBackCard from "@/Library/Common/WelcomeBackCard/WelcomeBackCard";
import PageSkeleton from "@/Library/Common/skeleton/PageSkeleton/PageSkeleton";
import "react-phone-input-2/lib/style.css";
import { UserProfile } from "@/Library/pages/ProfilePage/ProfilePage";
import { GetData } from "@/Utils/AxiosFetch";
import { ExamsAr, ExamsEn } from "../../../../messages/Exams/Exams";
import uuid from "@/Utils/uuid";

export const dynamic = "force-dynamic";

export default async function Home({ params }: { params: Locale }) {
	const userInfo = (await GetData("/userInfo")) as { data: UserProfile };

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
			{/*<WelcomeBackCard userName={userInfo?.data?.firstName} locale={params.locale} />*/}

			<Row>
				<PageHeader num={data.data.length} subTitle={t.subTitle} title={"My Exams"} />
				{data.data.map(item => (
					<>
						<Col className={styles.marginTop12} $sm={6} $md={6} $lg={3} $xl={4} key={uuid()}>
							<ExamCard
								purchase={false}
								state={"active"}
								question={item.examId.questionsCount}
								type={"exam"}
								key={uuid()}
								cardImg={`/dist/exams/${item.examId.image}`}
								HREF={`/my-learning/${item.examId.slug}`}
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
		</Suspense>
	);
}
